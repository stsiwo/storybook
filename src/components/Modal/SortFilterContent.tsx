import * as React from 'react';
import styled from '../../styledComponents';


interface Props {
  className?: string;
  onSortChange?: (e: React.FormEvent<HTMLElement>) => void; 
  onFilterChange?: (e: React.FormEvent<HTMLElement>) => void; 
}

class SortFilter extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    //this.handleClick = this.handleClick.bind(this);
  }

  //handleClick(e: React.MouseEvent<HTMLElement>) {
    //e.stopPropagation();
  //}

  render() {
    return (
      <div className={ this.props.className }>
        <div>
          <Input type="radio" id="alphAsc" name="sort"></Input>
          <label htmlFor="alphAsc"></label>
        </div>
        <div>
          <Input type="radio" id="alphDesc" name="sort"></Input>
          <label htmlFor="alphDesc"></label>
        </div>
        <div>
          <Input type="radio" id="dateNewer" name="sort"></Input>
          <label htmlFor="dateNewer"></label>
        </div>
        <div>
          <Input type="radio" id="dateOlder" name="sort"></Input>
          <label htmlFor="dateOlder"></label>
        </div>
      </div>
    );
  }
}

const StyledSortFilter = styled(SortFilter)`
  // wrapper (overlay)
  font-family: ${( props ) => props.theme.primaryFontFamily };
  background-color: ${( props ) => props.theme.primaryOverlayColor };
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  display: ${( props ) => props.isOpen ? 'flex' : 'none' };
  align-items: center;
  justify-content: center;

  // modal content 
  & > div {
    background-color: #FFFFFF;
    width: 70%;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 2px 2px 2px ${( props ) => props.theme.primaryColor };
  }  

  & menu {
    padding-left: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
    
`;


export default StyledSortFilter;



