import * as React from 'react';
import styled from '../../styledComponents';

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
  width: 80px;
  background-color: ${( props ) => props.theme.secondaryColor };
  border: none;
  color: ${( props ) => props.theme.primaryFontColor };
  font-weight: bold;
  border-radius: 15px;
  font-size: 12px;
  outline: none;
  background-position: center;
  transition: background 0.8s;

  &:hover {
    background: ${( props ) => props.theme.thirdColor } radial-gradient(circle, transparent 1%, ${( props ) => props.theme.thirdColor } 1%) center/15000%; 
  }

  &:active {
    background-color: ${( props ) => props.theme.primaryColor };
    background-size: 100%;
    transition: background 0s;
  }
`;


export default StyledButton;

