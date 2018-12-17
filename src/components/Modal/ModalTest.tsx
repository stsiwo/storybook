import * as React from 'react';
import styled from '../../styledComponents';
import Modal from './Modal';

interface Props {
  className?: string;
  title: string;
  detail: string;
}

interface State {
  isModalOpen: boolean;
}

class ModalTest extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isModalOpen: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: React.MouseEvent<HTMLElement>) {
    const currentModalStatus = this.state.isModalOpen;
    this.setState({ isModalOpen: !currentModalStatus });
  }

  render() {
    const closeBtn = {
      name: "Close",
      onClick: this.handleClick,
    }
    return (
      <div>
        <button onClick={this.handleClick}>open modal</button>
        <Modal title={ this.props.title } detail={ this.props.detail } closeButton={ closeBtn } isOpen={ this.state.isModalOpen }></Modal>
      </div>
    );
  }
}

const StyledModalTest = styled(ModalTest)`
`;


export default StyledModalTest;



