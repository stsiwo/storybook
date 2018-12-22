import * as React from 'react';
import styled from '../../styledComponents';
import TextWIcon from '../InputText/TextWIcon';
import DefTree from './DefTree';
import { posItem, posItems } from '../PosSelect/posItems';

const wordIcon = require('./assets/word.svg');

import { IWord, IDef, Def } from './sampleWord';

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
    this.handleDefChange = this.handleDefChange.bind(this);
    this.handleNewDefClick = this.handleNewDefClick.bind(this);
    this.handleDeleteDefClick = this.handleDeleteDefClick.bind(this);
  }

  handleClick(e: React.MouseEvent<HTMLElement>) {
    this.props.onClick(e);
  }

  handleWordNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ name: e.target.value }); 
  }

  handleNewDefClick() {
    const currentDefs = this.state.defs;
    // need to fix later esp id stuff 
    currentDefs.push(new Def(10, posItems[0]));

    this.setState({ defs: [...currentDefs] });
  }

  handleDeleteDefClick(targetDefId: number) {
    const currentDefs = this.state.defs;
    // slice function returns shallow copy of original
    const newDefs = currentDefs.filter(( def ) => def.id !== targetDefId );

    this.setState({ defs: newDefs }); 
  }


    
  handleDefChange(newValue: posItem | string, targetDefId: number, property: string ) {
    const currentDefs = this.state.defs;

    // map function return new array so it's immutable
    const nextDefs = currentDefs.map(( def ) => {
      if ( def.id === targetDefId ) {
        def[property] = newValue;
      }
      return def;
    });

    this.setState({ defs: nextDefs });
    
    //const testArray = [1, 2,3,4,5,6];
    //console.log(...testArray);
    //const testObject = {
      //name: 'a',
      //prop1: 'b',
      //prop2: 'b',
      //[Symbol.iterator]: function* () {
        //let properties = Object.keys(this);
        //for (let i of properties) {
          //yield [i, this[i]];
        //}
      //}
    //};
    //const overrideObject = {
      //...testObject,
      //name: 'override',
    //};
    //console.log(...overrideObject);
  }

  render() {
    return (
      <form className={ this.props.className }>
        <TextWIcon placeholder="enter a new word here..." svgSrc={ wordIcon } labelName="word-text" onChange={ this.handleWordNameChange } value={ this.state.name }></TextWIcon>
        <p>let’s define as many definitions of the word as you want :)</p>
        <DefTree defs={ this.state.defs } initialSearchInput={ this.state.name } onDefChange={ this.handleDefChange } onNewDefClick={ this.handleNewDefClick } onDeleteDefClick={ this.handleDeleteDefClick }></DefTree>
      </form>
    );
  }
}

const StyledWordForm = styled(WordForm)`
  padding: 10px;

  
`;


export default StyledWordForm;


