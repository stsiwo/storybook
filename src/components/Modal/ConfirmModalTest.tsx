import * as React from 'react';
import styled from '../../styledComponents';
import Modal from './Modal';

interface Props {
  className?: string;
  title: string;
  detail: string;
}

interface State {
  isConfirmModalOpen: boolean;
}

class ConfirmModalTest extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isConfirmModalOpen: false,
    }
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleConfirmClick = this.handleConfirmClick.bind(this);
  }

  handleToggleClick(e: React.MouseEvent<HTMLElement>) {
    const currentModalStatus = this.state.isConfirmModalOpen;
    this.setState({ isConfirmModalOpen: !currentModalStatus });
  }

  handleConfirmClick(e: React.MouseEvent<HTMLElement>) {
    // implement later. for now, just log in console for this functionality
    console.log("clicked confirm btn");
  }

  render() {
    const selectCloseBtn = {
      name: "Close",
      onClick: this.handleToggleClick,
    }
    const confirmBtn = {
      name: "Confirm",
      onClick: this.handleConfirmClick,
    }
    return (
      <div>
        <button onClick={this.handleToggleClick}>open confirm deletion warning modal</button>
        <Modal title={ this.props.title } detail={ this.props.detail } closeButton={ selectCloseBtn } confirmButton={ confirmBtn } isOpen={ this.state.isConfirmModalOpen }></Modal>
      </div>
    );
  }
}

const StyledConfirmModalTest = styled(ConfirmModalTest)`
`;


export default StyledConfirmModalTest;




