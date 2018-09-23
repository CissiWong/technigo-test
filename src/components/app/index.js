import React, { Component } from 'react'
import './style.css'

//components
import Start from "components/start"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            name: ""
        }
    }

    componentDidMount() {
        fetch("https://api.teamtailor.com/v1/jobs/", {
          method: "GET",
          headers: ({
          Accept: "application/vnd.api+json",
          "Content-Type": "application/json",
          "X-Api-Version": 20161108,
          Authorization: "Token ci4U-k0GCxLNZhWFLiI74XOVJXEzD_iRuLozdh2H",
        }),
          body: JSON.stringify()
        }).then(response =>
            {response.json().then(response => {
            this.setState({
              data: response.data,
              name: response.data[0].attributes.name
            })
        })
    })
}



  render() {
      return (
        <div className="App">
            {this.state.data.map(item => {
                return <Start
                    key={item.id}
                    name={item.attributes.name}
                    type={item.type}
                    text={item.attributes.body}
                    title={item.attributes.title}
                 />
            })}
        </div>
    )}
}


export default App;
