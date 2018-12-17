import * as React from 'react';
import styled from '../../styledComponents';
import Button from '../Button/Button';

interface button {
  name: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

interface Props {
  className?: string;
  title: string;
  detail: string;
  children?: string;
  isOpen: boolean;
  closeButton: button;
}

class Modal extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
  }

  render() {
    return (
      <div className={ this.props.className } onClick={ this.props.closeButton.onClick }>
        <div onClick={ this.handleClick }>
          <form method="dialog">
            <h3>{ this.props.title }</h3>
            <hr />
            <p>{ this.props.detail }</p>
            { this.props.children }
            <hr />
            <menu>
              <Button onClick={ this.props.closeButton.onClick }>{ this.props.closeButton.name }</Button>
            </menu>
          </form>
        </div>
      </div>
    );
  }
}

const StyledModal = styled(Modal)`
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
    background-color: #FFFFFF;
    width: 70%;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 2px 2px 2px ${( props ) => props.theme.primaryColor };
  }  
    

`;


export default StyledModal;


