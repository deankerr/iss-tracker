import React from 'react'

class PeoplePanel extends React.Component {
  state = {
    isLoaded: false,
    people: []
  }

  componentDidMount() {
    this.getPeople()
  }

  getPeople = async () => {
    try {
      const response = await fetch(`http://api.open-notify.org/astros.json`)
      const data = await response.json()
      this.setState({ people: data.people, isLoaded: true })
    } catch (err) {
      console.log('People API Error: ', err.message)
    }
  }

  render() {
    const { isLoaded, people } = this.state
    return (
      <div className="peoplePanel">
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>People In Space</div>
        {
          isLoaded
            ?
            <div className="peopleList">
              <ul>
                {
                  people.map(person => (
                    <li>
                      ({person.craft}) {person.name}
                    </li>
                  ))
                }
              </ul>
            </div>
            :
            <p>Loading</p>
        }
      </div>
    )
  }

}

export default PeoplePanel
