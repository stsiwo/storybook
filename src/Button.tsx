import * as React from "react";

interface Props {
  text: string;
}

interface State {
}

export default class Link extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}
