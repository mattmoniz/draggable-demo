// import React, { Component } from "react";

// export default class DemoComponent extends Component {
//   render() {
//     return <div>Card-{this.props.color}</div>;
//   }
// }


import React from 'react'

const demoComponent = (props) => {
    return (
        <div>
            Card-{props.color}
        </div>
    )
}

export default demoComponent
