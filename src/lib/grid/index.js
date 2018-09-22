import React from 'react'
import './style.css'

class Grid extends React.Component {
    render () {
        return (
            <div className={`grid ${this.props.className}`}>
                {this.props.children}
            </div>
        )
    }
}

export default Grid
