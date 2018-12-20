import * as React from 'react';
import styled from '../../styledComponents';
import TextWIcon from '../InputText/TextWIcon';
import DefTree from './DefTree';

const wordIcon = require('./assets/word.svg');

import { IWord, IDef } from './sampleWord';

interface Props {
  className?: string;
  word: IWord;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

interface State {
  name: string;
  defs: IDef[];
}

class WordForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: this.props.word.name,
      defs: this.props.word.defs,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleWordNameChange = this.handleWordNameChange.bind(this);
  }

  handleClick(e: React.MouseEvent<HTMLElement>) {
    this.props.onClick(e);
  }

  handleWordNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ name: e.target.value }); 
  }

  render() {
    return (
      <form className={ this.props.className }>
        <TextWIcon placeholder="enter a new word here..." svgSrc={ wordIcon } labelName="word-text" onChange={ this.handleWordNameChange } value={ this.state.name }></TextWIcon>
        <p>let’s define as many definitions of the word as you want :)</p>
        <DefTree defs={ this.state.defs } initialSearchInput={ this.state.name }></DefTree>
      </form>
    );
  }
}

const StyledWordForm = styled(WordForm)`

  
`;


export default StyledWordForm;


