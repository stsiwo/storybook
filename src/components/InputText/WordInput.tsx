import * as React from 'react';
import styled from '../../styledComponents';
import InputText from './InputText';
import Icon from '../Icon/Icon';
const wordIcon = require('./assets/word.svg');

interface Props {
  className?: string;
  placeholder?: string;
  labelName: string;
}

const WordInput: React.SFC<Props> = ( props ) => {
  return (
    <div className={ props.className }>
      <label htmlFor={ props.labelName }>
        <Icon svgSrc={ wordIcon } checked={ true }/>
      </label>
      <InputText placeholder={ props.placeholder } labelName={ props.labelName } />
    </div>
  );
}

const StyledWordInput = styled(WordInput)`
  background-color: ${( props ) => props.theme.thirdColor };  
  border-radius: 15px;
  height: 30px;
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: flex-start;

  & label {
    margin-left: 5px;
  }
`
export default StyledWordInput;

