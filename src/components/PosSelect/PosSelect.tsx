import * as React from 'react'; 
import styled from '../../styledComponents'; 
import Icon from '../Icon/Icon';
const posIcon = require('./assets/pos.svg');
import Select from './Select';

interface Item {
  value: string;
}

interface Props {
  className?: string;
  items: Item[];
  selectedItem: Item;
  labelName: string;
  handleChange: () => void; // temporary. need to swap later
}

const PosSelect: React.SFC<Props> = (props) => {
  return (
    <div className={ props.className }>
      <label htmlFor={ props.labelName } >
        <Icon svgSrc={ posIcon } />
      </label>
      <Select items={ props.items } selectedItem={ props.selectedItem } labelName={ props.labelName } handleChange={props.handleChange}></Select>  
    </div>
  );
}

const StyledPosSelect = styled(PosSelect)`
  background-color: ${( props ) => props.theme.thirdColor };
  height: 30px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & label {
    margin-left: 5px;
  }
`
export default StyledPosSelect;

