import * as React from 'react';
import styled from '../../styledComponents';
import Select from '../PosSelect/Select';
import Text from '../InputText/Text';
import { posItems, posItem } from '../PosSelect/posItems';
import File from '../InputText/File';
import BottomModal from '../Modal/AppLayer/BottomModal';
import SearchModalContent from '../Modal/BusinessLayer/SearchModalContent';

interface Props {
  className?: string;
  onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  initialTextValue: string;
  selectedItem: posItem;
  isOpen: boolean;
  initialSearchInput: string;
}

interface State {
  isSearchImageModalOpen: boolean;
}

class DefContent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isSearchImageModalOpen: false,
    }
    this.handleSearchImageToggleClick = this.handleSearchImageToggleClick.bind(this);
  }

  handleSearchImageToggleClick(e: React.MouseEvent<HTMLElement>) {
    const currentStatus = this.state.isSearchImageModalOpen;
    this.setState({ isSearchImageModalOpen: !currentStatus });
  }

  render() {
    return (
      <ul className={ this.props.className }>
        <li>
          <Select onChange={ this.props.onSelectChange } items={ posItems } selectedItem={ posItems[0] } labelName="pos">Pos</Select>
        </li>
        <li>
          <Text onChange={ this.props.onTextChange } placeholder="enter your definition here..." labelName="def" value={ this.props.initialTextValue }>Def</Text>
        </li>
        <li>
          <File labelName="def-upload-image" handleSearchImageToggleClick={ this.handleSearchImageToggleClick }/> 
        </li>
        <BottomModal isOpen={ this.state.isSearchImageModalOpen } handleSearchImageToggleClick={ this.handleSearchImageToggleClick }><SearchModalContent initialSearchInput={ this.props.initialSearchInput }/></BottomModal>
      </ul>
    );
  }
}

const StyledDefContent = styled(DefContent)`
  display: ${( props ) => props.isOpen ? '' : 'none' }; 
  list-style-type: none;
`;

export default StyledDefContent;




