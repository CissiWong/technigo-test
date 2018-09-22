import React, { Component } from 'react';
import './App.css';

//components

import Start from "components/start"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch("https://api.teamtailor.com/v1/jobs", {
          method: "GET",
          headers: ({
          Accept: "application/vnd.api+json",
          "Content-Type": "application/json",
          "X-Api-Version": 20161108,
          Authorization: "Token ci4U-k0GCxLNZhWFLiI74XOVJXEzD_iRuLozdh2H",
         }),
          body: JSON.stringify()
      }).then(response => {response.json().then( response => {
          this.setState({
              data: response
            })  
        })
    })
}


      // if (response.status === 200) {
      //     this.setState({
      //          data: response
      //     })
      // } else {
      //   console.log("oh no!", response.status === 404)
      // }

      render() {
        return (
          <div className="App">
                 <Start />
          </div>
        )
      }
    }




export default App;
