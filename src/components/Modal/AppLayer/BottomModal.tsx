import * as React from 'react';
import styled from '../../../styledComponents';

interface Props {
  className?: string;
  isOpen: boolean;
  children?: React.ReactNode;
  handleSearchImageToggleClick: (e: React.MouseEvent<HTMLElement>) => void;
}

class BottomModal extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
  }

  render() {
    return (
      <div className={ this.props.className } onClick={ this.props.handleSearchImageToggleClick }>
        <div onClick={ this.handleClick }>
          <form method="dialog">
            { this.props.children }
          </form>
        </div>
      </div>
    );
  }
}

const StyledBottomModal = styled(BottomModal)`
  // wrapper (overlay)
  font-family: ${( props ) => props.theme.primaryFontFamily };
  background-color: ${( props ) => props.theme.primaryOverlayColor };
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  display: ${( props ) => props.isOpen ? 'flex' : 'none' };
  align-items: center;
  justify-content: center;

  // modal content 
  & > div {
    position: fixed;
    bottom: 0;
    background-color: #FFFFFF;
    width: 100%;
  // to display scroll bar
  // calculated value:
  // modal content (this): 150px = 50px (search input + margin) + 100px (SearchResults)
    height: 150px;
  }  

    
`;


export default StyledBottomModal;



