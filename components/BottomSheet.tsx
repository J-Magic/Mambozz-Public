import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {
  forwardRef,
  useCallback,
  useMemo,
  useState,
  useRef,
} from 'react';
import { BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet';
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import { MotiView } from 'moti';
import { Easing } from 'react-native-reanimated';
import { Audio } from 'expo-av';
import { useAppDispatch, useAppSelector } from '@/Store';
import { setIsRecording, setSoundURI } from '@/slices/navSlice';
import AudioPlayer from './AudioPlayer';

export type Ref = BottomSheetModal;
interface BSheetProps {
  onAction: () => void;
}
const BottomSheet = forwardRef<Ref, BSheetProps>((props, ref) => {
  // const { sendMsg } = props
  const { onAction } = props;
  const snapPoints = useMemo(() => ['35'], []);
  // const renderBackdrop = useCallback((props: any)=>
  // <BottomSheetBackdrop appearOnIndex={0} disappearsOnIndex={-1}{...props}/>, [])
  const { dismiss } = useBottomSheetModal();
  const dispatch = useAppDispatch();
  // const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [recordingStarted, setRecordingStarted] =
    useState<Audio.Recording | null>(null);

  const [uriSound, setUriSound] = useState<string | null>(null);

  // Progress Timer
  const [timer, setTimer] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const countRef = useRef<NodeJS.Timer | null>(null); //Reference to the interval ID

  const startTimer = () => {
    setIsActive(true);
    setIsPaused(false);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };
  const handlePause = () => {
    clearInterval(countRef.current as NodeJS.Timer);
    setIsPaused(true);
  };
  const handleContinue = () => {
    setIsPaused(false);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(countRef.current as NodeJS.Timer);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}: ${seconds
      .toString()
      .padStart(2, '0')}`;
  };
  const startRecording = async () => {
    // popIn();
    setUriSound(null);
    startTimer();
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
        // onRecordingStatusUpdate,
        // progressUpdateIntervalMillis,
      );
      // setRecording(recording);

      // dispatch(setIsRecording({ rec: recording }));
      setRecordingStarted(recording);
      // console.log('Recording Object:', recordingObject);
      // console.log('Status:', status);
      // dispatch(setIsRecording({ rec: recording }));
      // setRecordingStarted(recordingObject);

      console.log('Recording started');
    } catch (e) {
      console.error('Failed to start recording', e);
    }
  };

  const stopRecording = async () => {
    handleReset();
    console.log('Stopping recording..');
    if (!recordingStarted) {
      return;
    }

    const recordingStopped = await recordingStarted.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    console.log('Recording Stopeed Object:', recordingStopped);

    const uri = recordingStarted.getURI();
    setRecordingStarted(null);
    console.log('Recording stopped and stored at ', uri);
    if (!uri) {
      return;
    }
    dispatch(setSoundURI({ uri }));
    setUriSound(uri);
    // setSoundURI(uri);
    // popOut();
  };

  const deleteAudioRecording = () => {
    dispatch(setSoundURI({ uri: '' }));
    setUriSound(null);
  };

  const closeBottomSheet = () => {
    deleteAudioRecording();
    dismiss();
  };
  const sendVoiceNote = () => {
    onAction();
    deleteAudioRecording();
    dismiss();
  };
  return (
    <BottomSheetModal ref={ref} snapPoints={snapPoints}>
      <View
        style={{
          flexDirection: 'column',
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ alignSelf: 'flex-start', paddingLeft: 20 }}>
            <Text style={{ fontSize: 18 }}>{formatTime(timer)}</Text>
          </View>
          <TouchableOpacity
            style={{ alignSelf: 'flex-end', paddingRight: 20 }}
            // onPress={() => dismiss()}
            onPress={closeBottomSheet}
          >
            <AntDesign name='close' size={24} color='black' />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              padding: 30,
              paddingBottom: 60,
              marginBottom: 5,
            }}
          >
            {recordingStarted === null && uriSound === null && (
              <View>
                <TouchableOpacity
                  onPress={startRecording}
                  style={{
                    padding: 20,
                    backgroundColor: 'black',
                    borderRadius: 20,
                  }}
                >
                  <MaterialCommunityIcons
                    // name={recording ? 'microphone' : 'microphone-outline'}
                    name={'microphone'}
                    size={35}
                    // color={recording ? 'red' : 'white'}
                    color={'white'}
                  />
                </TouchableOpacity>
              </View>
            )}

            {recordingStarted === null && uriSound === null && (
              <View>
                <Text style={{ fontSize: 18, padding: 18 }}>Tap to record</Text>
              </View>
            )}

            {recordingStarted && (
              <View style={[styles.dot, styles.center]}>
                {[...Array(3).keys()].map((index) => {
                  return (
                    <MotiView
                      from={{ opacity: 0.7, scale: 1 }}
                      animate={{ opacity: 0, scale: 4 }}
                      transition={{
                        type: 'timing',
                        duration: 2500,
                        easing: Easing.out(Easing.ease),
                        delay: index * 400,
                        repeatReverse: false,
                        loop: true,
                      }}
                      key={index}
                      style={[StyleSheet.absoluteFillObject, styles.dot]}
                    />
                  );
                })}
                <MaterialCommunityIcons
                  // name={recording ? 'microphone' : 'microphone-outline'}
                  name={'microphone'}
                  size={28}
                  // color={recording ? 'red' : 'white'}
                  color={'white'}
                />
              </View>
            )}

            {/* <Button title='Dismiss' onPress={() => dismiss} /> */}
          </View>
        </View>
        {/* <View
          style={{
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
         
        </View> */}
        {recordingStarted && (
          <View
            style={{
              // flexDirection: 'row',
              // justifyContent: 'space-between',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* <MaterialIcons
              name='delete'
              size={30}
              color='black'
              style={{ paddingLeft: 20, marginBottom: 10 }}
            /> */}

            <TouchableOpacity
              // onPress={isPaused ? () => handleContinue : startTimer}
              onPress={stopRecording}
              style={{ backgroundColor: 'white' }}
            >
              {/* <Feather
                name={isPaused ? 'play' : 'pause'}
                size={24}
                color='white'
              /> */}
              <MaterialCommunityIcons
                name='progress-check'
                size={40}
                color='black'
              />
            </TouchableOpacity>
            {/* <Feather name={'play'} size={30} color='gray' /> */}
            {/* <Ionicons
              name='send'
              size={30}
              color='gray'
              style={{ paddingRight: 20 }}
            /> */}
          </View>
        )}

        {uriSound && <AudioPlayer soundURI={uriSound} />}
        {uriSound && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 10,
              marginRight: 10,
            }}
          >
            <TouchableOpacity onPress={deleteAudioRecording}>
              <MaterialIcons
                name='delete'
                size={30}
                color='black'
                style={{ paddingLeft: 20, marginBottom: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={sendVoiceNote}>
              <Ionicons
                name='send'
                size={30}
                color='gray'
                style={{ paddingRight: 20 }}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </BottomSheetModal>
  );
});

export default BottomSheet;

const styles = StyleSheet.create({
  dot: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'red',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
