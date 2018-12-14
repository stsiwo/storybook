import * as React from 'react';
import styled from '../../styledComponents';
import Input from './Input';

interface Props {
  className?: string;
  labelName?: string;
  children?: string;
  onChange: (e: React.MouseEvent<HTMLElement>) => void;
}

class CheckBox extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this); 
  }

  handleChange(e: React.MouseEvent<HTMLElement>) {
    this.props.onChange(e);
  }

  render() {
    return (
      <div className={ this.props.className }>
        <Input type="checkbox" name={ this.props.labelName } id={ this.props.labelName }></Input>
        <label htmlFor={ this.props.labelName }>
          { this.props.children }
        </label>
      </div>
    );
  }

}

const StyledCheckBox = styled(CheckBox)`
`;

export default StyledCheckBox;
