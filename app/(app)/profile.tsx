import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Crypto from 'expo-crypto';
import { useNavigation } from '@react-navigation/native';
import { Storage } from 'aws-amplify';
import { useRouter } from 'expo-router';

import { API, graphqlOperation, Auth } from 'aws-amplify';
// import { updateUser } from '@/src/graphql/mutations';
import { updateUser } from '@/components/ApolloQueries/Mutations';
import { useAuth } from '../../context/auth';

// import {
//   setReduxUser,
//   setChatProImgS3Key,
//   setChatProfileName,
//   setChatProfileBio,
//   selectUser_Redux,
//   setChatProfileImage,
// } from '../slices/navSlice';
import ImageView from 'react-native-image-viewing';

import { userSessionCache } from '../../context/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation } from '@apollo/client';
import {
  UpdateUserMutation,
  UpdateUserMutationVariables,
  UpdateUserInput,
} from '@/src/API';
import { useAppSelector } from '@/Store';

// import { generateKeyPair } from '../../utils/crypto';
export const PRIVATE_KEY = 'PRIVATE_KEY';

const ChatProfileSetupScreen = () => {
  const { height, width } = useWindowDimensions();
  let [pName, setPName] = useState<string | undefined>('');
  let [bio, setBio] = useState<string | undefined>('');
  let [file, setFile] = useState<string[] | null>(null);
  const [progresses, setProgresses] = useState({});
  const [usePic, setUsePic] = useState(false);
  const [imgKey, setImgKey] = useState();
  const [imageSource, setImageSource] = useState();
  const [changePic, setChangePic] = useState(true);
  const navigation = useNavigation();
  const codelessNumber = useAppSelector((state) => state.nav.codelessNumber);
  console.log('CODELESS NUMBER FROM PROFILE SCREEN: ', codelessNumber);

  // const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const [updateProfile] = useMutation<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >(updateUser);
  const router = useRouter();
  const { authedUser, authId } = useAuth();

  // const updateKeyPair = async () => {
  //   // generate private/public key
  //   const { publicKey, secretKey } = generateKeyPair();
  //   console.log(publicKey, secretKey);

  //   // save private key to Async storage
  //   await AsyncStorage.setItem(PRIVATE_KEY, secretKey.toString());
  //   console.log('secret key was saved');

  //   // save public key to UserModel in Datastore
  //   //  const userData = await Auth.currentAuthenticatedUser();
  //   const dbUser = await DataStore.query(User, sessionUser.id);

  //   if (!dbUser) {
  //     Alert.alert('User not found!');
  //     console.log('User not found hence keypair has not been updated');
  //     return;
  //   }

  //   await DataStore.save(
  //     User.copyOf(dbUser, (updated) => {
  //       updated.publicKey = publicKey.toString();
  //     })
  //   );

  //   console.log(dbUser);
  //   console.log('Successfully updated the keypair.');
  //   // Alert.alert('Successfully updated the keypair.');
  // };

  // useEffect(() => {
  //   updateKeyPair();
  // }, []);

  const handleDone = async () => {
    if (pName === null || pName === undefined) {
      Alert.alert('Required', 'Username required');
      return;
    }
    setLoading(true);
    let chatImageUri: string[] | string;
    let uploadResult: string[] | string | undefined;

    if (file !== null && file !== undefined) {
      if (typeof file === 'object') {
        // uploadFile(file).then(setImgKey);
        // console.log('File: ', file);

        // Create check so that only one picture is uploaded
        for (const f of file) {
          console.log('Log of file in the array to be uploaded:', f);
          try {
            uploadResult = await uploadFile(f);
            if (uploadResult !== undefined) {
              chatImageUri = await Storage.get(uploadResult);
              // if (pName !== null && pName !== undefined) {

              // const updatedUser = await API.graphql(
              //   graphqlOperation(updateUser, {
              //     input: {
              //       id: authedUser,
              //       imageKey: uploadResult,
              //       chatImage: chatImageUri,
              //       chatStatus: bio,
              //       username: pName,
              //     },
              //   })
              // );

              const input: UpdateUserInput = {
                id: authId,
                imageKey: uploadResult,
                chatImage: chatImageUri,
                chatStatus: bio,
                username: pName,
                codelessNumber,
              };

              const updatedUser = await updateProfile({
                // variables: {
                //   input: {
                //     id: authId,
                //     imageKey: uploadResult,
                //     chatImage: chatImageUri,
                //     chatStatus: bio,
                //     username: pName,
                //     codelessNumber,
                //     // numbers: codelessNumber,
                //   },
                variables: { input },
              });
              console.log(
                'Updated User Username, ChatImage Save Result: ',
                updatedUser
              );
              console.log('PNAME: ', pName);
              console.log('IMAGE STRING: ', chatImageUri);
              console.log('Pushing to Homepage from profile');
              // await AsyncStorage.setItem('USER_INITIAL_PROFILE', 'set');
              await userSessionCache.saveUser('USER_INITIAL_PROFILE', 'set');
              const profileSave = await userSessionCache.getUser(
                'USER_INITIAL_PROFILE'
              );
              console.log('PROFILE SAVE RESULT :', profileSave);
              router.push('/(app)/(tabs)/');
              // router.push('/');
              // }
            }
          } catch (e: any) {
            setChangePic(true);
            Alert.alert('Oops', (e as Error).message);
            console.log('Error', e);
          }
        }
      }
    }

    setFile(null);
    setLoading(false);
  };
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    });
    console.log('IMAGE PICKER RESULT: ', result);

    if (!result.canceled) {
      setChangePic(false);
      setFile([result.assets[0].uri]);
    }
  };

  const uploadFile = async (fileUri: string) => {
    try {
      console.log('FILE URI :', fileUri);
      const response = await fetch(fileUri);
      const blob = await response.blob();
      const key = `${Crypto.randomUUID()}.jpg`;
      console.log('KEY: ', key);

      const storageResult = await Storage.put(key, blob, {
        // contentType: 'image/png', //contentType is optional

        progressCallback: (progress) => {
          console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
          setProgresses((p) => ({
            ...p,
            [fileUri]: progress.loaded / progress.total,
          }));
        },
      });
      console.log('STORAGE RESULT: ', storageResult);

      return key;
    } catch (err) {
      console.log('Error uploading file:', err);
    }
  };

  return (
    <KeyboardAvoidingView
      // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 90}
      style={{
        flex: 1,
        marginHorizontal: 10,
        marginTop: 20,
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}
        >
          {/* {file !== null? ():( )} */}
          {file && typeof file === 'object' && file?.length > 0 && (
            // {file?.length > 0 && (
            // <View style={{ alignSelf: 'flex-end' }}>
            <TouchableOpacity
              onPress={pickImage}
              style={{
                borderRadius: 100,
                margin: 15,
                marginHorizontal: 10,
                alignSelf: 'center',
                backgroundColor: 'lightblue',
                height: 0.28 * height,
                width: 0.5 * width,
              }}
            >
              <View>
                <Image
                  source={{ uri: file[0] }}
                  style={{
                    borderRadius: 100,
                    marginHorizontal: 10,
                    alignSelf: 'center',
                    height: 0.28 * height,
                    width: 0.5 * width,
                  }}
                  resizeMode='contain'
                />
              </View>
            </TouchableOpacity>
            // </View>
          )}

          {changePic && (
            <TouchableOpacity
              onPress={pickImage}
              style={{
                borderRadius: 100,
                margin: 15,
                padding: 15,
                // marginHorizontal: 10,
                alignSelf: 'center',
                alignContent: 'center',
                backgroundColor: 'lightblue',
                height: 0.28 * height,
                width: 0.5 * width,
                // borderWidth: StyleSheet.hairlineWidth,
              }}
            >
              <View
                style={{
                  marginTop: 20,
                  alignSelf: 'center',
                }}
              >
                <Entypo name='user' size={80} color='gray' />
              </View>
            </TouchableOpacity>
          )}

          <Text
            style={{
              alignSelf: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              margin: 10,
            }}
          >
            Change Profile Picture
          </Text>

          <Text
            style={{
              fontSize: 20,
              alignSelf: 'center',
            }}
          >
            Name
          </Text>
          {/* TextInput */}
          <TextInput
            style={{
              backgroundColor: 'whitesmoke',
              padding: 5,
              paddingHorizontal: 10,
              margin: 10,
              borderRadius: 10,
              borderColor: 'gray',
              borderWidth: StyleSheet.hairlineWidth,
              fontSize: 24,
            }}
            value={pName}
            onChangeText={setPName}
            placeholder='Enter username...'
          />
          {/* Status text input */}
          <Text
            style={{
              fontSize: 20,
              alignSelf: 'center',
            }}
          >
            Bio
          </Text>
          {/* TextInput */}
          <TextInput
            style={{
              backgroundColor: 'whitesmoke',
              padding: 5,
              paddingHorizontal: 10,
              margin: 10,
              borderRadius: 10,
              borderColor: 'gray',
              borderWidth: StyleSheet.hairlineWidth,
              fontSize: 24,
            }}
            value={bio}
            onChangeText={setBio}
            placeholder='Enter short bio...'
          />
          {/* End of status text input */}
          <View>
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                backgroundColor: 'whitesmoke',
                padding: 5,
                paddingHorizontal: 10,
                margin: 10,
                borderRadius: 10,
                borderColor: 'gray',
                borderWidth: StyleSheet.hairlineWidth,
              }}
              // onPress={() => navigation.navigate('Chats')}
              onPress={handleDone}
            >
              <Text
                style={{
                  fontSize: 20,
                }}
              >
                {loading ? 'Loading...' : 'Done'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }} />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default ChatProfileSetupScreen;

const styles = StyleSheet.create({});
