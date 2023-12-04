import React, { useEffect, useState } from 'react';
import { Text, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import SmartImage from './SmartImage';
import * as Contacts from 'expo-contacts';
import { Contact } from 'expo-contacts';
import { User } from '@/src/API';

dayjs.extend(relativeTime);
// interface IContactListItem {
//   user: User;
//   onPress?: () => void;
//   selectable?: boolean;
//   isSelected?: boolean;
// }
// const ContactListItem = ({
//   user,
//   onPress = () => {},
//   selectable = false,
//   isSelected = false,
// }: IContactListItem) => {

type UserProps = {
  user: User;
  onPress?: () => void;
  selectable?: boolean;
  isSelected?: boolean;
};
const ContactListItem = ({
  user,
  onPress = () => {},
  selectable = false,
  isSelected = false,
}: UserProps) => {
  // const [number, setNumber] = useState();
  // useEffect(() => {
  //   (async () => {
  //     const { data } = await Contacts.getContactsAsync({
  //       fields: [Contacts.Fields.PhoneNumbers],
  //     });
  //     if (data.length > 0) {
  //       // const contact = data[0];
  //       // console.log('CONTACT :', contact);
  //       //  setPhoneBook(data);
  //       const contacts = data;
  //       // const contact : string = contacts[2001].phoneNumbers
  //       setNumber(contacts[500].firstName);
  //       console.log('FROM CONTACTS SCREEN');
  //       console.log('1ST CONTACT: ', contacts[500]);
  //       console.log('CONTACT NAME: ', contacts[500].firstName);
  //       console.log('CONTACTS LASTNAME: ', contacts[500].lastName);
  //       console.log('CONTACTS NOW: ', contacts[500].phoneNumbers?.[0]?.number);
  //     }
  //   })();
  // }, []);
  // console.log('USER FROM CONTACTLIST ITEM: ', user.chatImage);
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {/* <SmartImage imgKey={user?.imageKey} style={styles.image} /> */}
      {/* <Image source={{ uri: user.chatImage }} style={styles.image} /> */}
      {user.chatImage && (
        <Image source={{ uri: user.chatImage }} style={styles.image} />
      )}
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {user.username}
        </Text>

        <Text numberOfLines={2} style={styles.subTitle}>
          {user.chatStatus}
        </Text>
      </View>
      {selectable &&
        (isSelected ? (
          <AntDesign name='checkcircle' size={24} color='royalblue' />
        ) : (
          <FontAwesome name='circle-thin' size={24} color='lightgray' />
        ))}
    </TouchableOpacity>
  );
};

export default ContactListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'gray',
  },
});
