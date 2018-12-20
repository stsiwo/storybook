import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Text from './Text';
import TextWIcon from './TextWIcon';
import ThemeDecorator from '../ThemeDecorator';
import Search from './Search';
import CheckBox from './CheckBox';
import File from './File';
const wordIcon = require('./assets/word.svg');

const tempfunc: (e: React.MouseEvent<HTMLElement>) => void = (e) => {};
const tempChangeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {};
const tempClickFunc: (e: React.MouseEvent<HTMLElement>) => void = (e) => {};

storiesOf('form elements/text input (icon label))', module)
  .addDecorator(( story ) => <ThemeDecorator>{ story() }</ThemeDecorator>) 
  .add("word name", () => <TextWIcon placeholder='enter your new word here...' labelName="word-input" svgSrc={ wordIcon } value="initial value" onChange={ tempChangeFunc }></TextWIcon>)

storiesOf('form elements/text input (string label))', module)
  .addDecorator(( story ) => <ThemeDecorator>{ story() }</ThemeDecorator>) 
  .add("definition", () => <Text placeholder='enter your new word here...' labelName="word-input" onChange={ tempChangeFunc } value="">Def</Text>)

storiesOf('form elements', module)
  .addDecorator(( story ) => <ThemeDecorator>{ story() }</ThemeDecorator>) 
  .add("Search (without Icon label)", () => <Search placeholder='enter your new word here...' labelName="word-input" onClick={ tempfunc } initialValue="initial value" ></Search>)
  .add("CheckBox", () => <CheckBox labelName="word-input" onChange={ tempChangeFunc } checked={ true }>Sample Word</CheckBox>)
  .add("unchecked CheckeBox", () => <CheckBox labelName="word-input" onChange={ tempChangeFunc } checked={ false }>Sample Word</CheckBox>)

storiesOf('form elements', module)
  .addDecorator(( story ) => <ThemeDecorator>{ story() }</ThemeDecorator>) 
  .add("File", () => <File labelName="file" handleSearchImageToggleClick={ tempClickFunc } file="myfile"></File>)

