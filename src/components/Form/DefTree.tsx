import * as React from 'react';
import styled from '../../styledComponents';
import Icon from '../Icon/Icon';
import DefNode from './DefNode';
import { posItem } from '../PosSelect/posItems';

const arrowIcon = require('./assets/rightArrow.svg');
const newIcon = require('./assets/new.svg');

interface IDef {
  pos: posItem;
  def: string;
  image: string;
}

interface Props {
  className?: string;
  initialSearchInput: string; // word name for initial search input
  defs: IDef[]; 
}

interface State {
  isDefNodeOpen: boolean;
  defs: IDef[];
}

class DefTree extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isDefNodeOpen: true,
      defs: this.props.defs,
    }
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick(e: React.MouseEvent<HTMLElement>) {
    const currentToggleStatus = this.state.isDefNodeOpen;
    this.setState({ isDefNodeOpen : !currentToggleStatus });  
  }

  renderDefNodes() {
    return this.state.defs.map(( eachDef ) => ( 
      <DefNode pos={ eachDef.pos } def={ eachDef.def} image={ eachDef.image } isOpen={ this.state.isDefNodeOpen } initialSearchInput={ this.props.initialSearchInput }></DefNode>
    ));
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
        { this.renderDefNodes() }
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




