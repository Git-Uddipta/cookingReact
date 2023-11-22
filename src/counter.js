import { ThemeContext } from './App'
import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.inCnt,
    }
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {(style) => (
          <div>
            <button style={style} onClick={() => this.changeCnt(-1)}>
              -
            </button>
            <span>{this.state.count}</span>
            <button style={style} onClick={() => this.changeCnt(1)}>
              +
            </button>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
  changeCnt(amt) {
    this.setState()
  }
}
