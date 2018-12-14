import * as React from 'react';
import styled from '../../styledComponents';
import Icon from '../Icon/Icon';

interface Props {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  children?: string;
  svgSrc: string;
}

class ControllerItem extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: React.MouseEvent<HTMLElement>) {
    this.props.onClick(e);
  }

  render() {
    return (
      <div className={ this.props.className }>
        <Icon svgSrc={ this.props.svgSrc }></Icon>
        <h4>{ this.props.children }</h4>
      </div>
    );
  }
}

const StyleControllerItem = styled(ControllerItem)`
  text-align: center;
  width: 16%; 
  height: 50px;
  padding: 3px;
  box-sizing: border-box;
  transition: opacity 0.5s;
  cursor: pointer;

  & > h4 {
    margin: 0;
  }

  &:hover {
    opacity: 0.5;
    transition: opacity 0.5s;
  }
`;

export default StyleControllerItem;


