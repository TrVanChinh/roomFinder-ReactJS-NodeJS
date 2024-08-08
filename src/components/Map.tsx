// import React, { useEffect, useState } from 'react';
// import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

// interface MapProps {
//   apiKey: string;
//   defaultCenter: google.maps.LatLngLiteral;
//   zoom: number;
// }

// interface MarkerData {
//   lat: number;
//   lng: number;
//   name: string;
//   key: string

// }


// const Map: React.FC<MapProps> = ({ apiKey, defaultCenter, zoom }) => {
//   const [center, setCenter] = useState<google.maps.LatLngLiteral>(defaultCenter);
//   const [markers, setMarkers] = useState<MarkerData[]>([]);
//   const [currentPosition, setCurrentPosition] = useState<google.maps.LatLngLiteral | null>(null);
//   const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>(null);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         setCurrentPosition({ lat: latitude, lng: longitude });
//         setCenter({ lat: latitude, lng: longitude });
//         setMarkers([
//           {
//             lat: latitude,
//             lng: longitude,
//             name: 'Vị trí hiện tại của tôi',
//             key: 'current-location',
//           },
//         ]);
//       },
//       (error) => {
//         console.error('Lỗi khi lấy vị trí:', error);
//       }
//     );
//   }, []);

//   const handleMarkerClick = (marker: MarkerData) => {
//     setSelectedMarker(marker);
//   };

//   const handleGetCurrentLocation = () => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         setCurrentPosition({ lat: latitude, lng: longitude });
//         setCenter({ lat: latitude, lng: longitude });
//         // Cập nhật lại marker cho vị trí hiện tại
//         setMarkers((prevMarkers) => [
//           ...prevMarkers.filter((marker) => marker.key !== 'current-location'), // Loại bỏ marker cũ
//           {
//             lat: latitude,
//             lng: longitude,
//             name: 'Vị trí hiện tại của tôi',
//             key: 'current-location',
//           },
//         ]);
//       },
//       (error) => {
//         console.error('Lỗi khi lấy vị trí:', error);
//       }
//     );
//   };

//   return (
//     <div>
//       <button onClick={handleGetCurrentLocation}>
//         Chuyển đến vị trí hiện tại
//       </button>
//       <LoadScript googleMapsApiKey={apiKey}>
//         <GoogleMap
//           mapContainerStyle={{ height: '400px', width: '100%' }}
//           center={center}
//           zoom={zoom}
//         >
//           {markers.map((marker) => (
//             <Marker
//               key={marker.key}
//               position={{ lat: marker.lat, lng: marker.lng }}
//               onClick={() => handleMarkerClick(marker)}
//             />
//           ))}

//           {selectedMarker && (
//             <InfoWindow
//               position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
//               onCloseClick={() => setSelectedMarker(null)}
//             >
//               <div>{selectedMarker.name}</div>
//             </InfoWindow>
//           )}
//         </GoogleMap>
//       </LoadScript>
//     </div>
//   );
// };

// export default Map;



// import React, {useState} from 'react'
// import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
// import BlueIconPlace from '../assets/Icon/location_blue.png'
// import RedIconPlace from '../assets/Icon/location_red.png'
// import PlaceImage from '../assets/image/restaurant.jpeg'
// import "./Map.css"
// // import { mapOptions } from './MapConfiguration';
// interface MapProps {
//   isLoaded: boolean;
// }

// interface MarkerData {
//   name: string;
//   location: {
//     lat: number;
//     lng: number;
//   },
//   iconUrl: string;
//   imageUrl: string;

// }

// const  Map: React.FC<MapProps>  = ({ isLoaded }) => {

//   const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>(null);

//   const containerStyle = {
//     width: '80vw',
//     height: '80vh'
//   };
  
//   const center = {
//     lat: 37.7749, 
//     lng: -122.4194
//   };


//   const markers = [
//     {
//       name: 'location_1',
//       location: {
//         lat: 37.7749,
//         lng: -122.4194
//       },
//       iconUrl: BlueIconPlace,
//       imageUrl: PlaceImage
//     },
//     {
//       name: 'location_2',
//       location: {
//         lat: 37.8749,
//         lng: -122.4194
//       },
//       iconUrl: BlueIconPlace,
//       imageUrl:PlaceImage

//     },
//     {
//       name: 'location_3',
//       location: {
//         lat: 37.8749,
//         lng: -123.4194
//       },
//       iconUrl: RedIconPlace,
//       imageUrl:PlaceImage

//     }
// ]


//   return (
//     isLoaded && (
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={10}
//         // options={{
//         //   styles: mapOptions.mapTheme
//         // }}
//       >
//         {markers.map((marker) => {
//           return (
//             <div key={marker.name}>
//               <Marker
//                 key={marker.name}
//                 position={{ lat: marker.location.lat, lng: marker.location.lng }}
//                 options={{
//                   icon: marker.iconUrl,
//                 }}
//                 onClick={() => setSelectedMarker(marker)}
               
//               />
//             </div> 
//           );
//         })}
//         {selectedMarker && (
//                 <InfoWindow position={selectedMarker.location}
//                             options={{ pixelOffset: new window.google.maps.Size(0,-20)}}
//                 >
//                   <div style={{ padding: 10}}>
//                     <h1 style={{ color: "black"}}>Location - {selectedMarker.name}</h1>
//                     <img src={selectedMarker.imageUrl} alt={selectedMarker.name} />
//                     <button onClick={() => setSelectedMarker(null)}>Close</button>
//                   </div>
//                 </InfoWindow>
//               )}
//       </GoogleMap>
//   )
//   )
// }

// export default Map

import React, { useState, useCallback } from 'react';
import { GoogleMap, Marker, InfoWindow, Autocomplete } from '@react-google-maps/api';
import BlueIconPlace from '../assets/Icon/location_blue.png';
import RedIconPlace from '../assets/Icon/location_red.png';
import PlaceImage from '../assets/image/restaurant.jpeg';
import './Map.css';

interface MapProps {
  isLoaded: boolean;
}

interface MarkerData {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  iconUrl: string;
  imageUrl: string;
}

const Map: React.FC<MapProps> = ({ isLoaded }) => {
  const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>(null);
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<{ lat: number; lng: number } | null>(null);

  const containerStyle = {
    width: '80vw',
    height: '80vh',
  };

  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  const markers: MarkerData[] = [
    {
      name: 'location_1',
      location: {
        lat: 37.7749,
        lng: -122.4194,
      },
      iconUrl: BlueIconPlace,
      imageUrl: PlaceImage,
    },
    {
      name: 'location_2',
      location: {
        lat: 37.8749,
        lng: -122.4194,
      },
      iconUrl: BlueIconPlace,
      imageUrl: PlaceImage,
    },
    {
      name: 'location_3',
      location: {
        lat: 37.8749,
        lng: -123.4194,
      },
      iconUrl: RedIconPlace,
      imageUrl: PlaceImage,
    },
  ];

  const onLoad = useCallback((autocompleteInstance: google.maps.places.Autocomplete) => {
    setAutocomplete(autocompleteInstance);
  }, []);

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      if (place.geometry && place.geometry.location) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        setSelectedPlace({ lat, lng });
      }
    } else {
      console.log('Autocomplete is not loaded yet!');
    }
  };

  return (
    isLoaded && (
      <>
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <input
            type="text"
            placeholder="Enter a location"
            style={{
              boxSizing: 'border-box',
              border: '1px solid transparent',
              width: '240px',
              height: '32px',
              padding: '0 12px',
              borderRadius: '3px',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
              fontSize: '14px',
              outline: 'none',
              textOverflow: 'ellipses',
              position: 'absolute',
              left: '50%',
              marginLeft: '-120px',
              top: '10px',
            }}
          />
        </Autocomplete>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={selectedPlace || center}
          zoom={10}
        >
          {markers.map((marker) => (
            <Marker
              key={marker.name}
              position={{ lat: marker.location.lat, lng: marker.location.lng }}
              icon={marker.iconUrl}
              onClick={() => setSelectedMarker(marker)}
            />
          ))}
          {selectedMarker && (
            <InfoWindow
              position={selectedMarker.location}
              onCloseClick={() => setSelectedMarker(null)}
              options={{ pixelOffset: new window.google.maps.Size(0, -20) }}
            >
              <div style={{ padding: 10 }}>
                <h1 style={{ color: 'black' }}>Location - {selectedMarker.name}</h1>
                <img src={selectedMarker.imageUrl} alt={selectedMarker.name} />
                <button onClick={() => setSelectedMarker(null)}>Close</button>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </>
    )
  );
};

export default Map;


