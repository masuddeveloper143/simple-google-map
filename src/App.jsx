import { useState } from 'react'
import './App.css'
import { Map } from '@vis.gl/react-google-maps';

function App() {
  

  return (
    <>
      <h1>react google map</h1>
 <Map
      style={{width: '100vw', height: '100vh'}}
      defaultCenter={{lat: 23.8103, lng: 90.4125}}
      defaultZoom={10}
      gestureHandling='greedy'
      disableDefaultUI
    />
    </>
  )
}

export default App
