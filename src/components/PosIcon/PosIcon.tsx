import * as React from 'react';
import styled from '../../styledComponents';

interface Props {
  className?: string;
  children: string;
}

const PosIcon: React.SFC<Props> = ( props ) => {
  return (
    <div className={ props.className }>
      { props.children }
    </div>
  );
}

const StyledPosIcon = styled(PosIcon)<{ checked?: boolean }>`
  background-color: ${( props ) => props.theme.primaryColor };
  height: 30px;
  width: 30px;
  border-radius: 50%;
  opacity: ${( props ) => (props.checked) ? '1' : '0.5'};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
  font-family: ${( props ) => props.theme.primaryFontFamily };
`;



export default StyledPosIcon;

