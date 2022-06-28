import React, { Component } from 'react'

export class Products extends Component {
  render() {
    return (
      <div>{this.props.info.title}</div>
    )
  }
}
