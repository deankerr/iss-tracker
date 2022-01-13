import React from 'react'
import GoogleMapReact from 'google-map-react'
import './ISSTracker.css'

import ISSMarker from './ISSMarker'
import ISSMarkerHistory from './ISSMarkerHistory'
import WeatherPanel from './WeatherPanel'
import PeoplePanel from './PeoplePanel'

const MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
const WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY

const DEFAULT_CENTER = { lat: -37.813611, lng: 144.963056 }
const DEFAULT_ZOOM = 4

class ISSTracker extends React.Component {
  state = {
    ISSPos: { lat: null, lng: null },
    ISSPosIsLoaded: false,
    ISSPosHistory: [],
    weatherPanels: []
  }


  componentDidMount() {
    this.getISSPos()
    setInterval(this.getISSPos, 2000)
  }


  getISSPos = async () => {
    try {
      const response = await fetch('http://api.open-notify.org/iss-now.json')
      const data = await response.json()

      const { latitude, longitude } = data.iss_position
      const lat = +latitude // convert to number
      const lng = +longitude

      if (this.state.ISSPosIsLoaded) {
        let history = this.state.ISSPosHistory
        history.push(this.state.ISSPos)
        this.setState({ ISSPosHistory: history })
      }

      this.setState({ ISSPos: { lat, lng }, ISSPosIsLoaded: true })
    } catch (err) {
      console.log('Map API Error: ', err.message)
    }
  }


  handleMapClick = (ev) => {
    let newPanel = {
      lat: ev.lat,
      lng: ev.lng,
      data: null
    }

    this.getWeather(newPanel)

    const weatherPanels = [
      ...this.state.weatherPanels,
      newPanel
    ]

    this.setState({ weatherPanels })
  }


  getWeather = async (panel) => {
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${panel.lat}&lon=${panel.lng}&units=metric&appid=${WEATHER_API_KEY}`)
      const data = await response.json()
      console.log("OpenWeather response:", data);
      panel.data = {
        name: data.name,
        temp: data.main.temp,
        iconUrl: `url('http://openweathermap.org/img/wn/${data.weather[0].icon}.png')`
      }
    } catch (err) {
      console.log('Weather API Error: ', err.message)
    }
  }


  render() {
    const { lat, lng } = this.state.ISSPos
    const { ISSPosIsLoaded, weatherPanels } = this.state

    const center = ISSPosIsLoaded ? { lat, lng } : DEFAULT_CENTER
    const history = this.state.ISSPosHistory

    return (
      <div className="ISSTracker">
        <h1>ISS Tracker</h1>
        <div className="latLong">Lat: {lat || 'Loading'} Long: {lng || 'Loading'}</div>

        <PeoplePanel />

        <div className="GoogleMap">
          <GoogleMapReact
            bootstrapURLKeys={{ key: MAPS_API_KEY }}
            center={center}
            zoom={DEFAULT_ZOOM}
            onClick={this.handleMapClick}
          >

            {history.map(pos => <ISSMarkerHistory lat={pos.lat} lng={pos.lng} />)}

            {
              ISSPosIsLoaded
                ?
                <ISSMarker
                  lat={lat}
                  lng={lng}
                />

                :
                console.log('Loading ISS Pos')
            }


            {weatherPanels.map(panel => <WeatherPanel {...panel} />)}

          </GoogleMapReact>

        </div>
      </div>
    )
  }
}

export default ISSTracker
