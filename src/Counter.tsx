import React, { Fragment, Component } from 'react';

import Count from './Count';

interface Props {}

interface State {
  count: number;
};

export default class Counter extends Component<Props, State> {
  state: State = {
    count: 0
  };

  increment = () => {
    const { count } = this.state;

    this.setState({
      count: (count + 1)
    });
  };

  decrement = () => {
    const { count } = this.state;

    count > 0 &&
      this.setState({
        count: (count - 1)
      });
  };

  render () {
    const { count } = this.state;

    return (
      <Fragment>
        <h2>Class Component</h2>
        <Count value={count} />
        <button
          onClick={this.increment}>
          Increment
        </button>
        <button
          disabled={count > 0 ? false : true}
          onClick={this.decrement}>
          Decrement
        </button>
      </Fragment>
    );
  }
}