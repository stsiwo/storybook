import * as React from 'react';
import styled from '../../styledComponents';

interface Props {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

class WordForm extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: React.MouseEvent<HTMLElement>) {
    this.props.onClick(e);
  }

  render() {
    return (
      form[className={ this.props.className }]>Text+p+div>Icon+h4+Icon
    );
  }
}

const StyledWordForm = styled(WordForm)`

`;


export default StyledWordForm;


