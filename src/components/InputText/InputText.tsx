import * as React from 'react';
import styled from '../../styledComponents';

interface Props {
  className?: string;
  placeholder?: string;
  labelName: string;
}

const InputText: React.SFC<Props> = ( props ) => {
  return (
    <input type="text" className={ props.className } name={ props.labelName } placeholder={ props.placeholder } />
  );
}

const StyledInputText = styled(InputText)`
  height: 20px;
  background-color: transparent;
  border: none;
  color: ${( props ) => props.theme.primaryFontColor };
`;


export default StyledInputText;
