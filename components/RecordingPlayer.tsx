import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AudioPlayer from './AudioPlayer';

const RecordingPlayer = () => {
  return (
    <SafeAreaView edges={['bottom']} style={styles.root}>
      <View style={{ flex: 1 }}>
        <AudioPlayer />
      </View>
    </SafeAreaView>
  );
};

export default RecordingPlayer;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
    backgroundColor: 'red',
    height: 120,
  },
});
