import * as React from 'react';
import styled from '../../../styledComponents';
import Search from '../../InputText/Search';
import SearchResults from './SearchResults';

interface ImageIF {
  name: string;
  src: string;
}

interface Props {
  className?: string;
  items: ImageIF[]; 
  handleSearchBtnClick: (e: React.MouseEvent<HTMLElement>) => void;
}

class SearchModalContent extends React.Component<Props, {} > {
  constructor(props: Props) {
    super(props);
    //this.handleSearchBtnClick = this.handleSearchBtnClick.bind(this);
  }

  //handleSearchBtnClick(e: React.MouseEvent<HTMLElement>) {
  //}

  render() {
    return (
      <div className={ this.props.className }>
        <Search placeholder="search images for your definition here..." onClick={ this.props.handleSearchBtnClick } />
        <SearchResults items={ this.props.items } />
      </div>
    );
  }
}

const StyledSearchModalContent = styled(SearchModalContent)`
 
`;


export default StyledSearchModalContent;





