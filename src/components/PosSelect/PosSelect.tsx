import * as React from 'react'; 
import styled from '../../styledComponents'; 
import Icon from '../Icon/Icon';
const posIcon = require('./assets/pos.svg');
import Select from './Select';
import { posItems } from './posItems';

interface Props {
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; 
}

const PosSelect: React.SFC<Props> = (props) => {
  return (
    <div className={ props.className }>
      <label htmlFor="posItems" >
        <Icon svgSrc={ posIcon } />
      </label>
      <Select items={ posItems } pos={ posItems[0] } labelName="posItems" onChange={props.onChange}>Pos</Select>  
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

