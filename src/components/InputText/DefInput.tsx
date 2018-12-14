import * as React from 'react';
import styled from '../../styledComponents';
import InputText from './InputText';
import formElement from '../common/formElement';
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
  ${ formElement }
`
export default StyledDefInput;


