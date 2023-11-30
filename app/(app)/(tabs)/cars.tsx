import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import carListingData from '@/assets/feed';
import React, { useMemo, useState } from 'react';
import EditScreenInfo from '@/components/EditScreenInfo';
// import { Text, View } from '@/components/Themed';
// import CarListingBottomSheet from '@/components/CarListingBottomSheet';
import { Stack } from 'expo-router';

export default function TabTwoScreen() {
  return (
    <View>
      <Text>Cars</Text>
      <View />
      <EditScreenInfo path='app/(tabs)/cars.js' />
    </View>
  );
}

//   const { height } = useWindowDimensions();
//   const items = useMemo(() => carListingData as any, []);
//   const [category, setCategory] = useState<string>('Luxury');

//   const screenHeight = height;
//   // console.log('DATA FEED: ', data);

//   const onDataChanged = (category: string) => {
//     setCategory(category);
//   };
//   return (
//     // <SafeAreaView style={{ flex: 1 }}>
//     //   <View style={{ flex: 1 }}>
//     //     <FlatList
//     //       data={data}
//     //       keyExtractor={(item) => item.id}
//     //       renderItem={({ item }) => (
//     //         <TouchableOpacity
//     //           onPress={() => {
//     //             //  navigation.navigate('ViewStay', { stayID: item.id });
//     //           }}
//     //         >
//     //           <View
//     //             style={{
//     //               margin: 23,
//     //             }}
//     //           >
//     //             {/* Image */}
//     //             <Image
//     //               style={{
//     //                 // width: '100%',
//     //                 // aspectRatio: 3 / 2,
//     //                 height: 310,
//     //                 width: null,
//     //                 resizeMode: 'cover',
//     //                 borderRadius: 10,
//     //               }}
//     //               source={{ uri: item.image }}
//     //             />
//     //             {/* Title (Area & City)*/}
//     //             <Text
//     //               style={{
//     //                 marginTop: 2,
//     //               }}
//     //             >
//     //               {' '}
//     //               {item.title}
//     //             </Text>
//     //             {/* <Text>Stay</Text> */}
//     //             {/* Availability */}
//     //             {/* <Text> {item.availability} </Text> */}
//     //             {/* Price */}
//     //             <Text> $ {item.newPrice} </Text>
//     //           </View>
//     //         </TouchableOpacity>
//     //       )}
//     //     />
//     //   </View>
//     //   <View
//     //     style={{
//     //       bottom: 0.03 * screenHeight,
//     //       alignItems: 'center',
//     //       justifyContent: 'center',
//     //       zIndex: 5,
//     //     }}
//     //   >
//     //     <TouchableOpacity
//     //       onPress={() => {
//     //         //  navigation.navigate('MapScreen');
//     //       }}
//     //     >
//     //       <View
//     //         //  style={tw`flex-row justify-center bg-black rounded-full py-1 px-3 `}
//     //         style={{
//     //           flexDirection: 'row',
//     //           paddingTop: 3,
//     //           paddingHorizontal: 5,
//     //           borderRadius: 50,
//     //           backgroundColor: 'black',
//     //           // justifyContent: 'center',
//     //           // alignItems: 'center',
//     //           alignContent: 'center',
//     //         }}
//     //       >
//     //         <FontAwesome
//     //           style={{ paddingHorizontal: 1 }}
//     //           name='map'
//     //           size={28}
//     //           color='white'
//     //         />
//     //         <Text
//     //           style={{
//     //             textDecorationColor: 'white',
//     //             paddingTop: 0.5,
//     //             fontWeight: 'bold',
//     //           }}
//     //         >
//     //           {' '}
//     //           Map{' '}
//     //         </Text>
//     //       </View>
//     //     </TouchableOpacity>
//     //   </View>
//     // </SafeAreaView>
//     <SafeAreaView
//       style={{
//         flex: 1,
//         marginTop: 80,
//       }}
//     >
//       <CarListingBottomSheet listings={items} category={category} />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });
