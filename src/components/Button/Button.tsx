import * as React from 'react';
import styled from '../../styledComponents';
import ripple from '../effects/ripple';

interface Props {
  className?: string;
  children: string;
  onClick(e: React.MouseEvent<HTMLElement>): void;
}

class Button extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: React.MouseEvent<HTMLElement>) {
    this.props.onClick(e);
  }

  render() {
    return (
      <button
        type="button"
        className={ this.props.className }
        onClick={this.handleClick}
      >
        {this.props.children}
      </button>
    );
  }
}

const StyledButton = styled(Button)`
  height: 30px;
  border: none;
  padding: 0 3%;
  color: ${( props ) => props.theme.primaryFontColor };
  font-weight: bold;
  border-radius: 15px;
  font-size: 14px;
  outline: none;
  font-family: ${( props ) => props.theme.primaryFontFamily };

  ${ripple}
`;


export default StyledButton;
