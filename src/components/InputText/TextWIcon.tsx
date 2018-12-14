import * as React from 'react';
import styled from '../../styledComponents';
import Input from './Input';
import Icon from '../Icon/Icon';
import formElement from '../common/formElement';

interface Props {
  className?: string;
  placeholder?: string;
  labelName: string;
  svgSrc: string;
}

const TextWIcon: React.SFC<Props> = ( props ) => {
  return (
    <div className={ props.className }>
      <label htmlFor={ props.labelName }>
        <Icon svgSrc={ props.svgSrc }/>
      </label>
      <Input type="text" placeholder={ props.placeholder } name={ props.labelName } />
    </div>
  );
}

const StyledTextWIcon = styled(TextWIcon)`
  ${ formElement }
`
export default StyledTextWIcon;

