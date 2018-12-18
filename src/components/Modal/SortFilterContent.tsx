import * as React from 'react';
import styled from '../../styledComponents';
import Sort from './Sort';
import Filter from './Filter';


interface Props {
  className?: string;
  onSortChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  onFilterChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
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
        <Sort onSortChange={ this.props.onSortChange } />
        <Filter onFilterChange={ this.props.onFilterChange } />
      </div>
    );
  }
}

const StyledSortFilter = styled(SortFilter)`
    
`;


export default StyledSortFilter;



