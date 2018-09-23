import React, { Component } from 'react'
import './style.css'
import { BrowserRouter, Route, Switch } from "react-router-dom"

//components
import Job from "components/job"

//views
import StartView from "views/startView"


export default class App extends Component {
    render () {
        return (
        <BrowserRouter>
              <div className="container">
                <Switch>
                  <Route path="/" exact component={StartView} />
                  <Route path="/jobs/:id" exact component={Job} /> */}
                </Switch>
              </div>
        </BrowserRouter>
        )
    }
}
