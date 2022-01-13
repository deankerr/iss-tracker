function ISSMarker() {
  const MARKER_SIZE_PX = 64
  const markerOffset = MARKER_SIZE_PX / 2

  return (
    <div style={{position: 'relative', top: -markerOffset, left: -markerOffset }}>
      <img
        className="ISSMarker" 
        width={MARKER_SIZE_PX}
        alt="International Space Station" 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/International_Space_Station.svg/512px-International_Space_Station.svg.png" 
        />
    </div>
  )
}

export default ISSMarker
