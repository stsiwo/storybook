import * as React from 'react';
import styled from '../../styledComponents';
import Icon from '../Icon/Icon';
import DefContent from './DefContent';
import { posItem, posItems } from '../PosSelect/posItems';

const arrowIcon = require('./assets/rightArrow.svg');
const deleteIcon = require('./assets/delete.svg');

//interface ImageIF {
  //name: string;
  //src: string;
//}

interface Props {
  className?: string;
  def: string;
  pos: posItem;
  image: string;
  isOpen: boolean;
  initialSearchInput: string;
}

interface State {
  isDefContentOpen: boolean;
  pos: posItem;
  def: string;
  image: string; 
}

class DefNode extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isDefContentOpen: true,
      pos: this.props.pos,
      def: this.props.def,
      image: this.props.image,
    }
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handlePosSelectChange = this.handlePosSelectChange.bind(this);
    this.handleDefTextChange = this.handleDefTextChange.bind(this);
  }

  handleToggleClick(e: React.MouseEvent<HTMLElement>) {
    const currentToggleStatus = this.state.isDefContentOpen;
    this.setState({ isDefContentOpen : !currentToggleStatus });  
  }

  handlePosSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const targetPosItem = posItems.find(( pos ) => pos.value === e.target.value);
    this.setState({ pos: targetPosItem }); 
  }

  handleDefTextChange(e: React.ChangeEvent<HTMLInputElement>) {
      this.setState({ def: e.target.value });
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
        <DefContent onSelectChange={ this.handlePosSelectChange } onTextChange={ this.handleDefTextChange } pos={ this.props.pos } def={ this.props.def } image={ this.props.image } isOpen={this.state.isDefContentOpen } initialSearchInput={ this.props.initialSearchInput }/>
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



