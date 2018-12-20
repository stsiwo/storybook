import * as React from 'react'; 
import styled from '../../styledComponents'; 
import Option from './Option';
import { posItem } from './posItems';
import formElement from '../common/formElement';

interface Props {
  className?: string;
  items: posItem[];
  pos: posItem;
  labelName: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; 
}

interface State {
  pos: string;
}

class Select extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
        pos: this.props.pos.value,
    }
    this.renderOptions = this.renderOptions.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  renderOptions() {
    const { items } = this.props;
    return ( items.map(( posItem ) => {
      return <Option key={ posItem.value } value={posItem.value}>{ posItem.pos }</Option> 
    }));
  }

  handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ pos: e.target.value }); 
    this.props.onChange(e);
  }

  render() {
    return (
      <select value={this.state.pos} name={this.props.labelName} className={ this.props.className } onChange={this.handleChange}>
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

interface WrapperProps {
  className?: string;
  items: posItem[];
  pos: posItem;
  labelName: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; 
  children: string;
}

const WrapperSelect: React.SFC<WrapperProps> = (props) => {
  return (
    <div className={ props.className }>
      <label htmlFor={ props.labelName }>
        { props.children }
      </label>
      <StyledSelect items={ props.items } pos={ props.pos } labelName={ props.labelName } onChange={props.onChange}></StyledSelect>  
    </div>
  );
}

const StyledWrapperSelect = styled(WrapperSelect)`
  ${ formElement }
`;

export default StyledWrapperSelect;

