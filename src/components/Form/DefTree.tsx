import * as React from 'react';
import styled from '../../styledComponents';
import Icon from '../Icon/Icon';
import DefNode from './DefNode';
import { posItem } from '../PosSelect/posItems';

const arrowIcon = require('./assets/rightArrow.svg');
const newIcon = require('./assets/new.svg');

interface Props {
  className?: string;
  onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  initialTextValue: string;
  selectedItem: posItem;
}

interface State {
  isDefNodeOpen: boolean;
}

class DefTree extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isDefNodeOpen: true,
    }
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick(e: React.MouseEvent<HTMLElement>) {
    const currentToggleStatus = this.state.isDefNodeOpen;
    this.setState({ isDefNodeOpen : !currentToggleStatus });  
  }

  render() {
    return (
      <ul className={ this.props.className }>
        <li>
          <div>
            <Icon svgSrc={ arrowIcon } width="20px" height="20px" onClick={ this.handleToggleClick } rotate={ this.state.isDefNodeOpen }></Icon>
            <h3>definition list</h3>
          </div>
          <div>
            <Icon svgSrc={ newIcon } width="20px" height="20px"></Icon>
          </div>
        </li>
        <DefNode onSelectChange={ this.props.onSelectChange } onTextChange={ this.props.onTextChange } selectedItem={ this.props.selectedItem } initialTextValue={ this.props.initialTextValue } isOpen={ this.state.isDefNodeOpen }></DefNode>
        <DefNode onSelectChange={ this.props.onSelectChange } onTextChange={ this.props.onTextChange } selectedItem={ this.props.selectedItem } initialTextValue={ this.props.initialTextValue } isOpen={ this.state.isDefNodeOpen }></DefNode>
        <DefNode onSelectChange={ this.props.onSelectChange } onTextChange={ this.props.onTextChange } selectedItem={ this.props.selectedItem } initialTextValue={ this.props.initialTextValue } isOpen={ this.state.isDefNodeOpen }></DefNode>
      </ul>
    );
  }
}

const StyledDefTree = styled(DefTree)`

  padding-inline-start: 20px;

  & ul {
    padding-inline-start: 20px;
  }

  & li {
    margin: 5px 0;
  }

  & > li:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div:first-child {
      display: inline-flex;
      align-items: center;
      justify-content: flex-start;

      & > h3 {
        margin: 0;
      }
    }
  }



    
`;

export default StyledDefTree;




