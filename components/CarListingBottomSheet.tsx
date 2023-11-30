// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   useWindowDimensions,
//   Image,
//   FlatList,
// } from 'react-native';
// import React, { useMemo, useRef, useEffect, useState } from 'react';
// import BottomSheet from '@gorhom/bottom-sheet';
// import { FontAwesome } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
// import CarListing from './CarListing';
// import data from '@/assets/feed';

// interface Props {
//   listings: any[];
//   category: string;
// }
// const CarListingBottomSheet = ({ listings, category }: Props) => {
//   const bottomSheetRef = useRef<BottomSheet>(null);
//   const snapPoints = useMemo(() => ['10%', '100%'], []);
//   const [refresh, setRefresh] = useState<number>(0);

//   const { height } = useWindowDimensions();
//   const screenHeight = height;

//   const onShowMap = () => {
//     bottomSheetRef.current?.collapse();
//     setRefresh(refresh + 1);
//   };
//   return (
//     <BottomSheet
//       ref={bottomSheetRef}
//       index={1}
//       snapPoints={snapPoints}
//       enablePanDownToClose={false}
//     >
//       <View style={styles.contentContainer}>
//         <CarListing listings={listings} refresh={refresh} category={category} />
//         <View style={styles.absoluteView}>
//           <TouchableOpacity onPress={onShowMap} style={styles.btn}>
//             <Text style={{ fontFamily: 'mon-sb', color: '#fff' }}>Map</Text>
//             <Ionicons
//               name='map'
//               size={20}
//               style={{ marginLeft: 10 }}
//               color={'#fff'}
//             />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </BottomSheet>
//   );
// };

// export default CarListingBottomSheet;

// // const styles = StyleSheet.create({
// //   absoluteBtn: {
// //     position: 'absolute',
// //     bottom: 30,
// //     width: '100%',
// //     alignItems: 'center',
// //   },
// //   mapBtn: {
// //     flexDirection: 'row',
// //     padding: 16,
// //     height: 50,
// //     borderRadius: 30,
// //     backgroundColor: 'black',
// //     alignItems: 'center',
// //     gap: 8,
// //   },
// // });

// const styles = StyleSheet.create({
//   contentContainer: {
//     flex: 1,
//   },
//   absoluteView: {
//     position: 'absolute',
//     bottom: 30,
//     width: '100%',
//     alignItems: 'center',
//   },
//   btn: {
//     backgroundColor: 'black',
//     padding: 14,
//     height: 50,
//     borderRadius: 30,
//     flexDirection: 'row',
//     marginHorizontal: 'auto',
//     alignItems: 'center',
//   },
//   sheetContainer: {
//     backgroundColor: '#fff',
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     shadowOffset: {
//       width: 1,
//       height: 1,
//     },
//   },
// });
