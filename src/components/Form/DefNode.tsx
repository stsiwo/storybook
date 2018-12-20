import * as React from 'react';
import styled from '../../styledComponents';
import Icon from '../Icon/Icon';
import DefContent from './DefContent';
import { posItem } from '../PosSelect/posItems';

const arrowIcon = require('./assets/rightArrow.svg');
const deleteIcon = require('./assets/delete.svg');

interface Props {
  className?: string;
  onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  initialTextValue: string;
  selectedItem: posItem;
  isOpen: boolean;
}

interface State {
  isDefContentOpen: boolean;
}

class DefNode extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isDefContentOpen: true,
    }
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick(e: React.MouseEvent<HTMLElement>) {
    const currentToggleStatus = this.state.isDefContentOpen;
    this.setState({ isDefContentOpen : !currentToggleStatus });  
  }

  render() {
    return (
      <ul className={ this.props.className }>
        <li>
          <div>
            <Icon svgSrc={ arrowIcon } width="20px" height="20px" onClick={ this.handleToggleClick } rotate={ this.state.isDefContentOpen }></Icon>
            <h4>Definition</h4>
          </div>
          <div>
            <Icon svgSrc={ deleteIcon } width="20px" height="20px"></Icon>
          </div>
        </li>
        <DefContent onSelectChange={ this.props.onSelectChange } onTextChange={ this.props.onTextChange } selectedItem={ this.props.selectedItem } initialTextValue={ this.props.initialTextValue } isOpen={this.state.isDefContentOpen }/>
      </ul>
    );
  }
}

const StyledDefNode = styled(DefNode)`

  display: ${( props ) => props.isOpen ? '' : 'none' }; 

  & > li:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div:first-child {
      display: inline-flex;
      align-items: center;
      justify-content: flex-start;

      & > h4 {
        margin: 0;
      }
    }

    & > div:last-child {
      display: inline-flex;
      align-items: center;
      justify-content: flex-end;
    }
  }

`;

export default StyledDefNode;



