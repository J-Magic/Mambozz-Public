// import {
//   StyleSheet,
//   Text,
//   View,
//   useWindowDimensions,
//   FlatList,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import React, { useState, useEffect, useRef, memo } from 'react';
// import { defaultStyles } from '@/constants/Styles';
// import MapView from 'react-native-map-clustering';
// import { Marker } from 'react-native-maps';
// import { Ionicons } from '@expo/vector-icons';

// import places from '@/assets/feed';
// import data from '@/assets/feed';
// import { useRouter } from 'expo-router';
// import * as Location from 'expo-location';

// interface Props {
//   listings: any;
// }

// const INITIAL_REGION = {
//   latitude: 37.33,
//   longitude: -122,
//   latitudeDelta: 9,
//   longitudeDelta: 9,
// };
// //  initialRegion={{
// //           latitude: -1.2948945,
// //           longitude: 36.7992071,
// //           latitudeDelta: 0.8,
// //           longitudeDelta: 0.8,
// //         }}

// // const carListingMap = memo(({ listings }: Props) => {
// const carListingMap = ({ listings }: Props) => {
//   const router = useRouter();
//   const mapRef = useRef<any>(null);

//   // When the component mounts, locate the user
//   // useEffect(() => {
//   //   onLocateMe();
//   // }, []);

//   const onMarkerSelected = (event: any) => {
//     router.push(`/carListingDetails/${event.id}`);
//   };
//   // Focus the map on the user's location
//   // const onLocateMe = async () => {
//   //   let { status } = await Location.requestForegroundPermissionsAsync();
//   //   if (status !== 'granted') {
//   //     return;
//   //   }

//   //   let location = await Location.getCurrentPositionAsync({});

//   //   const region = {
//   //     latitude: location.coords.latitude,
//   //     longitude: location.coords.longitude,
//   //     latitudeDelta: 7,
//   //     longitudeDelta: 7,
//   //   };

//   //   mapRef.current?.animateToRegion(region);
//   // };

//   // const carListingMap = () => {
//   // const router = useRouter();
//   // const { width, height } = useWindowDimensions();
//   // const [selectedStayId, setSelectedStayId] = useState(null);
//   // const flatlist = useRef(null);
//   // const viewConfig = useRef({ itemVisiblePercentThreshold: 70 });
//   // const onViewChanged = useRef(({ viewableItems }) => {
//   //   if (viewableItems.length > 0) {
//   //     const selectedPlace = viewableItems[0].item;
//   //     setSelectedStayId(selectedPlace.id);
//   //   }
//   // });
//   // const mapRef = useRef();

//   // useEffect(() => {
//   //   if (!selectedStayId || !flatlist) {
//   //     return;
//   //   }
//   //   const index = places.findIndex((place) => place.id === selectedStayId);
//   //   flatlist?.current?.scrollToIndex({ index });

//   //   const selection = places[index];
//   //   const region = {
//   //     latitude: selection.coordinate.latitude,
//   //     longitude: selection.coordinate.longitude,
//   //     latitudeDelta: 0.8,
//   //     longitudeDelta: 0.8,
//   //   };

//   //   mapRef?.current?.animateToRegion(region);
//   // }, [selectedStayId]);

//   // Overwrite the renderCluster function to customize the cluster markers
//   const renderCluster = (cluster: any) => {
//     const { id, geometry, onPress, properties } = cluster;

//     const points = properties.point_count;
//     return (
//       <Marker
//         key={`cluster-${id}`}
//         coordinate={{
//           longitude: geometry.coordinates[0],
//           latitude: geometry.coordinates[1],
//         }}
//         onPress={onPress}
//       >
//         <View style={styles.marker}>
//           <Text
//             style={{
//               color: '#000',
//               textAlign: 'center',
//             }}
//           >
//             {points}
//           </Text>
//         </View>
//       </Marker>
//     );
//   };

//   return (
//     <View style={defaultStyles.container}>
//       <MapView
//         ref={mapRef}
//         animationEnabled={false}
//         style={StyleSheet.absoluteFillObject}
//         initialRegion={INITIAL_REGION}
//         clusterColor='#fff'
//         clusterTextColor='#000'
//         renderCluster={renderCluster}
//       >
//         {listings.map((item: any) => (
//           <Marker
//             coordinate={{
//               latitude: item.coordinate.latitude,
//               longitude: item.coordinate.longitude,
//             }}
//             key={item.id}
//             onPress={() => onMarkerSelected(item)}
//           >
//             <View style={styles.marker}>
//               <Text style={styles.markerText}>€ {item.properties.price}</Text>
//             </View>
//           </Marker>
//         ))}
//       </MapView>
//       {/* <TouchableOpacity style={styles.locateBtn} onPress={onLocateMe}>
//         <Ionicons name="navigate" size={24} color='blue' />
//       </TouchableOpacity> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   marker: {
//     padding: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//     elevation: 5,
//     borderRadius: 12,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     shadowOffset: {
//       width: 1,
//       height: 10,
//     },
//   },
//   markerText: {
//     fontSize: 14,
//   },
//   locateBtn: {
//     position: 'absolute',
//     top: 70,
//     right: 20,
//     backgroundColor: '#fff',
//     padding: 10,
//     borderRadius: 10,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     shadowOffset: {
//       width: 1,
//       height: 10,
//     },
//   },
// });

// export default carListingMap;
