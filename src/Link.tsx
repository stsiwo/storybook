// Link.react.js
import * as React from 'react';

enum STATUS {
  HOVERED = 'hovered',
  NORMAL = 'normal',
}

interface Props {
  page?: string;
  children: string;
}

interface State {
  class: STATUS; 
}

export default class Link extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props);

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);

    this.state = {
      class: STATUS.NORMAL,
    };
  }

  _onMouseEnter() {
    this.setState({class: STATUS.HOVERED});
  }

  _onMouseLeave() {
    this.setState({class: STATUS.NORMAL});
  }

  render() {
    return (
      <a
        className={this.state.class}
        href={this.props.page || '#'}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
      >
        {this.props.children}
      </a>
    );
  }
}
