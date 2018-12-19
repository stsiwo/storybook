import * as React from 'react';
import styled from '../../styledComponents';
import Select from '../PosSelect/Select';
import Text from '../InputText/Text';
import { posItems, posItem } from '../PosSelect/posItems';

interface Props {
  className?: string;
  onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  initialTextValue: string;
  selectedItem: posItem;
  isOpen: boolean;
}

class DefContent extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick(e: React.MouseEvent<HTMLElement>) {
      
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
          <img src="" alt="def image here..." />
        </li>
      </ul>
    );
  }
}

const StyledDefContent = styled(DefContent)`
  display: ${( props ) => props.isOpen ? '' : 'none' }; 
  list-style-type: none;
`;

export default StyledDefContent;




