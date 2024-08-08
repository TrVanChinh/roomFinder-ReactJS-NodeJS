// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Map from './components/Map';
// import { mapOptions } from './components/MapConfiguration';
import { useJsApiLoader } from '@react-google-maps/api';
function App() {

  // const googleMapsApiKey = mapOptions.googleMapAPIKey ?? 'YOUR_DEFAULT_API_KEY'
  // console.log(googleMapsApiKey)

  const { isLoaded } = useJsApiLoader({
    id: "AIzaSyDH7hIiVYyAa8Y7s9_ZJTDUe0BjU8lxfE0",
    googleMapsApiKey: "AIzaSyDH7hIiVYyAa8Y7s9_ZJTDUe0BjU8lxfE0",
    libraries: ['places']
  })


  return (
    <>
      <Map isLoaded={isLoaded}/>
      {/* <Map
        apiKey="AIzaSyDH7hIiVYyAa8Y7s9_ZJTDUe0BjU8lxfE0"
        defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
        zoom={13}
    /> */}

    </>
  )
}

export default App
