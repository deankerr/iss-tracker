function WeatherPanel(props) {
  const { data } = props

  let contents = <>Loading</>
  let iconUrl = null

  if (data) {
    const { name, temp } = data
    iconUrl = data.iconUrl
    contents = (
      <>
        <div>{name}</div>
        <div>{temp}&deg;C</div>
      </>
    )
  }


  return (
    <div className="weatherPanel" style={iconUrl ? { backgroundImage: iconUrl } : {}}>
      {contents}
    </div>
  )
}

export default WeatherPanel
