import * as React from 'react';
import styled from '../../styledComponents';
import Modal from './Modal';

interface Props {
  className?: string;
  title: string;
  detail: string;
}

interface State {
  isSortModalOpen: boolean;
}

class SortModalTest extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isSortModalOpen: false,
    }
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleConfirmClick = this.handleConfirmClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  handleToggleClick(e: React.MouseEvent<HTMLElement>) {
    const currentModalStatus = this.state.isSortModalOpen;
    this.setState({ isSortModalOpen: !currentModalStatus });
  }

  handleConfirmClick(e: React.MouseEvent<HTMLElement>) {
    // implement later. for now, just log in console for this functionality
    console.log("clicked confirm btn");
  }

  handleResetClick(e: React.MouseEvent<HTMLElement>) {
    // implement later. for now, just log in console for this functionality
    console.log("clicked reset btn");
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
    const reset = {
      name: "Reset",
      onClick: this.handleResetClick,
    }
    return (
      <div>
        <button onClick={this.handleToggleClick}>open reset warning modal</button>
        <Modal title={ this.props.title } detail={ this.props.detail } closeButton={ selectCloseBtn } confirmButton={ confirmBtn } resetButton={ resetBtn } isOpen={ this.state.isSortModalOpen }></Modal>
      </div>
    );
  }
}

const StyledSortModalTest = styled(SortModalTest)`
`;


export default StyledSortModalTest;





