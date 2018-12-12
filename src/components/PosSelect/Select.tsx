import * as React from 'react'; 
import styled from '../../styledComponents'; 
import Option from './Option';

interface Item {
  value: string;
}

interface Props {
  className?: string;
  items: Item[];
  selectedItem: Item;
  labelName: string;
  handleChange: () => void; // temporary. need to swap later
}


class Select extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.renderOptions = this.renderOptions.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  renderOptions() {
    const { items } = this.props;
    return ( items.map(( item ) => {
      return <Option key={ item.value } value={item.value}>{ item.value }</Option> 
    }));
  }

  handleChange() {
    this.props.handleChange();
  }

  render() {
    const { labelName, selectedItem } = this.props;
    return (
      <select value={selectedItem.value} name={labelName} className={ this.props.className } onChange={this.handleChange}>
        { this.renderOptions() } 
      </select>
    );
  }
}

const StyledSelect = styled(Select)`
  background-color: transparent;
  border: none;
  outline: none;
`;

export default StyledSelect;

