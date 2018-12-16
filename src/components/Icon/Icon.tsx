import * as React from 'react';
import styled from '../../styledComponents';

/**
 * need wrapper element like div>Icon for ease of style
 **/
const Icon = styled("div")<{ svgSrc: string, unchecked?: boolean, hoverEffect?: boolean, hidden?: boolean}>`
  background-image: url(${ (props) => props.svgSrc });
  height: 30px;
  width: 30px;
  opacity: ${( props ) => (props.unchecked) ? '0.5' : '1'};
  margin: 0 auto;
  visibility: ${( props ) => props.hidden ? 'hidden' : 'visible'};

  &:hover {
    ${( props ) => (props.hoverEffect) ? 'opacity: 0.5;': ''};
  }
`;

interface Props {
  className?: string;
  unchecked?: boolean;
  hoverEffect?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  hidden?: boolean;
  svgSrc: string;
}
  

class WrapperIcon extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: React.MouseEvent<HTMLElement>): void {
    this.props.onClick(e); 
  }

  render() {
    return (
      <div className={ this.props.className } onClick={ this.props.onClick }>
        <Icon svgSrc={ this.props.svgSrc } unchecked={ this.props.unchecked } hoverEffect={ this.props.hoverEffect } hidden={ this.props.hidden } />
      </div>
   );
  }
}

export default WrapperIcon;
