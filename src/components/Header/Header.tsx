import * as React from 'react';
import styled from '../../styledComponents';
import Icon from '../Icon/Icon';
const settingIcon = require('./assets/setting.svg');

interface Props {
  className?: string;
}

class Header extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  handleChange(): void {
    
  }

  render() {
    return (
      <header className={ this.props.className }>
        <div><Icon svgSrc={ settingIcon }></Icon></div>
        <h2>Title</h2>
        <div><Icon svgSrc={ settingIcon }></Icon></div>
      </header>
    );
  }
}


const StyledHeader = styled(Header)`
  background-color: ${( props ) => props.theme.secondaryColor };
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 50px;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;

  & > div:first-child {
    flex-basis: 50px;
  }

  & > h2 {
  }

  & > div:last-child {
    flex-basis: 50px;
  }
`;


export default StyledHeader;

