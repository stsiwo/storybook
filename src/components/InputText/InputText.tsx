import * as React from 'react';
import styled from '../../styledComponents';

import Icon from '../Icon/Icon';
const wordIcon = require('./assets/word.svg');

interface Props {
  className?: string;
  placeholder?: string;
}

const Text: React.SFC<Props> = ( props ) => {
  return (
    <input type="text" className={ props.className } name="input-text" placeholder={ props.placeholder } />
  );
}

const StyledText = styled(Text)`
  height: 20px;
  background-color: transparent;
  border: none;
  color: ${( props ) => props.theme.primaryFont };
`;


const InputText: React.SFC<Props> = ( props ) => {
  return (
    <div className={ props.className }>
      <label htmlFor="input-text"><Icon svgSrc={ wordIcon }/></label>
      <StyledText placeholder={ props.placeholder } />
    </div>
  );
}

const StyledInputText = styled(InputText)`
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
export default StyledInputText;
