import { Platform, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs, useRouter, useSegments } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '@/constants/Colors';
import {
  Ionicons,
  Entypo,
  Fontisto,
  FontAwesome5,
  MaterialIcons,
  Octicons,
} from '@expo/vector-icons';
import { useAppSelector } from '@/Store';
import { useEffect } from 'react';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Chats',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-chatbubbles-sharp' size={size} color={color} />
          ),

          headerRight: () => (
            <Link href='/settings' asChild>
              <Pressable>
                {({ pressed }) => (
                  <Ionicons
                    onPress={() => router.push('/settings')}
                    name='settings-outline'
                    size={22}
                    color={`${colorScheme === 'light' ? '#000' : '#FFCB45'}`}
                    style={{ marginRight: 15 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name='gifts'
        options={{
          title: 'Gifts',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name='gifts' size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name='addListing'
        options={{
          title: 'Add Listing',
          tabBarIcon: ({ color, size }) => (
            // <Ionicons name='car-sport-outline' size={size} color={color} />
            <Octicons name='diff-added' size={26} color={color} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name='addListing'
        options={{
          title: 'Add Listing',
          tabBarIcon: ({ color, size }) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: Platform.OS == 'ios' ? 50 : 60,
                  height: Platform.OS == 'ios' ? 50 : 60,
                  top: Platform.OS == 'ios' ? -10 : -20,
                  borderRadius: Platform.OS == 'ios' ? 25 : 30,
                }}
              >
                {/* <MaterialIcons name='add-box' size={50} color={color} /> */}
      {/* <Ionicons name='add-circle-sharp' size={55} color={color} />
              </View>
            );  */}
      {/* // <Octicons name='diff-added' size={40} color='black' />
      // <MaterialIcons name='library-add' size={38} color='black' />
      // <Ionicons name='ios-add-circle-sharp' size={48} color='black' /> */}

      {/* //     },
      //   }}
      // /> */}
      <Tabs.Screen
        name='magicstays'
        options={{
          title: 'MagicStays',
          tabBarIcon: ({ color, size }) => (
            <Fontisto name='holiday-village' size={25} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name='cars'
        options={{
          title: 'Cars',
          tabBarIcon: ({ color, size }) => (
            // <Ionicons name='car-sport-outline' size={size} color={color} />
            <Ionicons name='car-sport-sharp' size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          title: 'Settings',
          href: null,
        }}
      />
    </Tabs>
  );
}
