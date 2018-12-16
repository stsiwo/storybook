import * as React from 'react';
import styled from '../../styledComponents';
import Input from './Input';
import formElement from '../common/formElement';
interface Props {
  className?: string;
  placeholder?: string;
  labelName: string;
  children: string;
}

const Text: React.SFC<Props> = ( props ) => {
  return (
    <div className={ props.className }>
      <label htmlFor={ props.labelName }>
        { props.children }
      </label>
      <Input type="text" placeholder={ props.placeholder } id={ props.labelName }name={ props.labelName } />
    </div>
  );
}

const StyledText = styled(Text)`
  ${ formElement }
`
export default StyledText;


