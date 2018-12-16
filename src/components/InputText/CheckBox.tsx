import * as React from 'react';
import styled from '../../styledComponents';
import Input from './Input';

interface Props {
  className?: string;
  labelName?: string;
  children?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

class CheckBox extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this); 
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    // change checked props in this parent component
    this.props.onChange(e);
  }

  render() {
    return (
      <div className={ this.props.className }>
        <Input type="checkbox" name={ this.props.labelName } id={ this.props.labelName } onChange={ this.props.onChange }></Input>
        <label htmlFor={ this.props.labelName }>
          { this.props.children }
        </label>
      </div>
    );
  }

}

const StyledCheckBox = styled(CheckBox)`
  background-color: ${( props ) => (props.checked) ? props.theme.thirdColor : 'transparent' };

  border-radius: 20px;
  border: 3px solid ${( props ) => props.theme.thirdColor };
  height: 40px;

  display: inline-block;
  box-sizing: border-box;

  & > input {
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
  }  

  & > label {
    font-family: ${( props ) => props.theme.primaryFontFamily };
    display: inline-block;
    height: 100%;
    line-height: 40px;
    padding: 0 15px;
    cursor: pointer;
  }
`;

export default StyledCheckBox;
