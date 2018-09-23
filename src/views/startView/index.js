import React  from 'react'
import "./style.css"

//components
import Jobs from "components/jobs"

export default class StartView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
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
            })
        })
    })
}



  render() {
      return (
        <div className="Jobs">
            {this.state.data.map(item => {
                return <Jobs
                    key={item.id}
                    url={item.id}
                    name={item.attributes.name}
                    type={item.type}
                    text={item.attributes.body}
                    title={item.attributes.title}
                 />
            })}
        </div>
    )}
}
