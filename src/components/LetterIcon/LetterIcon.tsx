import * as React from 'react';
import styled from '../../styledComponents';

interface Props {
  className?: string;
  children: string;
}

const LetterIcon: React.SFC<Props> = ( props ) => {
  return <div className={ props.className }>{ props.children }</div>
}

const StyledLetterIcon = styled(LetterIcon)<{ checked: boolean }>`
  background-color: ${( props ) => props.theme.primaryColor };
  height: 30px;
  width: 30px;
  text-align: center;
  font-size: 1.3em;
  border-radius: 50%;
  color: #FFFFFF;
  opacity: ${( props ) => (props.checked) ? '1' : '0.5'};
`;

export default StyledLetterIcon;

