// import {
//   StyleSheet,
//   Text,
//   ListRenderItem,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, { useMemo, useRef, useEffect, useState } from 'react';
// import { Link } from 'expo-router';
// import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated';
// import {
//   BottomSheetFlatList,
//   BottomSheetFlatListMethods,
// } from '@gorhom/bottom-sheet';
// import { FontAwesome } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
// import { defaultStyles } from '@/constants/Styles';

// interface Props {
//   listings: any[];
//   refresh: number;
//   category: string;
// }

// const CarListing = ({ listings: items, refresh, category }: Props) => {
//   const listRef = useRef<BottomSheetFlatListMethods>(null);
//   const [loading, setLoading] = useState<boolean>(false);

//   useEffect(() => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//     }, 200);
//   }, [category]);

//   // Render one listing row for the FlatList
//   const renderRow: ListRenderItem<any> = ({ item }) => (
//     <Link href={`/carListingDetails/${item.id}`} asChild>
//       <TouchableOpacity>
//         <Animated.View
//           style={styles.listing}
//           entering={FadeInRight}
//           exiting={FadeOutLeft}
//         >
//           <Animated.Image source={{ uri: item.image }} style={styles.image} />
//           <TouchableOpacity
//             style={{ position: 'absolute', right: 30, top: 30 }}
//           >
//             <Ionicons name='heart-outline' size={24} color='#000' />
//           </TouchableOpacity>
//           <View
//             style={{ flexDirection: 'row', justifyContent: 'space-between' }}
//           >
//             <Text style={{ fontSize: 16 }}>{item.title}</Text>
//             <View style={{ flexDirection: 'row', gap: 4 }}>
//               <Ionicons name='star' size={16} />
//               {/* <Text>Rating:</Text> */}
//             </View>
//           </View>
//           <Text>5 </Text>
//           <View style={{ flexDirection: 'row', gap: 4 }}>
//             <Text>€ {item.totalPrice}</Text>
//             <Text>night</Text>
//           </View>
//         </Animated.View>
//       </TouchableOpacity>
//     </Link>
//   );
//   return (
//     <View style={defaultStyles.container}>
//       <BottomSheetFlatList
//         renderItem={renderRow}
//         data={loading ? [] : items}
//         ref={listRef}
//         ListHeaderComponent={
//           <Text style={styles.info}>{items.length} homes</Text>
//         }
//       />
//     </View>
//   );
// };

// export default CarListing;
// const styles = StyleSheet.create({
//   listing: {
//     padding: 16,
//     gap: 10,
//     marginVertical: 16,
//   },
//   image: {
//     width: '100%',
//     height: 300,
//     borderRadius: 10,
//   },
//   info: {
//     textAlign: 'center',

//     fontSize: 16,
//     marginTop: 4,
//   },
// });
