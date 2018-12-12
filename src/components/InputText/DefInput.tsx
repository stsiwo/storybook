import * as React from 'react';
import styled from '../../styledComponents';
import InputText from './InputText';

interface Props {
  className?: string;
  placeholder?: string;
  labelName: string;
}

const DefInput: React.SFC<Props> = ( props ) => {
  return (
    <div className={ props.className }>
      <label htmlFor={ props.labelName }>
        Def
      </label>
      <InputText placeholder={ props.placeholder } labelName={ props.labelName } />
    </div>
  );
}

const StyledDefInput = styled(DefInput)`
  background-color: ${( props ) => props.theme.thirdColor };  
  border-radius: 15px;
  height: 30px;
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: flex-start;

  & label {
    margin: 0 7px;
    color: ${( props ) => props.theme.secondaryFontColor };
  }
`
export default StyledDefInput;


