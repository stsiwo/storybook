import * as React from 'react';
import styled from '../../styledComponents';
import Modal from './Modal';

interface Props {
  className?: string;
  title: string;
  detail: string;
}

interface State {
  isSelectModalOpen: boolean;
}

class SelectModalTest extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isSelectModalOpen: false,
    }
    this.handleSelectCloseClick = this.handleSelectCloseClick.bind(this);
  }

  handleSelectCloseClick(e: React.MouseEvent<HTMLElement>) {
    const currentModalStatus = this.state.isSelectModalOpen;
    this.setState({ isSelectModalOpen: !currentModalStatus });
  }

  render() {
    const selectCloseBtn = {
      name: "Close",
      onClick: this.handleSelectCloseClick,
    }
    return (
      <div>
        <button onClick={this.handleSelectCloseClick}>open select warning modal</button>
        <Modal title={ this.props.title } detail={ this.props.detail } closeButton={ selectCloseBtn } isOpen={ this.state.isSelectModalOpen }></Modal>
      </div>
    );
  }
}

const StyledSelectModalTest = styled(SelectModalTest)`
`;


export default StyledSelectModalTest;



