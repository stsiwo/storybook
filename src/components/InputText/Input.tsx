import * as React from 'react';
import styled from '../../styledComponents';

interface Props {
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  name?: string;
  placeholder?: string;
  type?: string;
}

class Input extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.props.onChange(e);
  }

  render() {
    return (
      <input 
        className={ this.props.className }
        type={ this.props.type }
        id={ this.props.id }
        name={ this.props.name }
        placeholder={ this.props.placeholder }
        onChange={ this.handleChange }
      />
    );
  }
}


const StyledInput = styled(Input)`
  height: 20px;
  background-color: transparent;
  border: none;
  color: ${( props ) => props.theme.primaryFontColor };
`;


export default StyledInput;

