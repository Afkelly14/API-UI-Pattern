import React from "react";

class Name extends React.Component {
  render() {
    let name = this.props.name;

    return <div className="text">{name}</div>;
  }
}

export default Name;
