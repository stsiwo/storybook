import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Text from './Text';
import TextWIcon from './TextWIcon';
import ThemeDecorator from '../ThemeDecorator';
import Search from './Search';
import CheckBox from './CheckBox';
const wordIcon = require('./assets/word.svg');

const tempfunc: (e: React.MouseEvent<HTMLElement>) => void = (e) => {};

storiesOf('form elements/text input (icon label))', module)
  .addDecorator(( story ) => <ThemeDecorator>{ story() }</ThemeDecorator>) 
  .add("word name", () => <TextWIcon placeholder='enter your new word here...' labelName="word-input" svgSrc={ wordIcon }></TextWIcon>)

storiesOf('form elements/text input (string label))', module)
  .addDecorator(( story ) => <ThemeDecorator>{ story() }</ThemeDecorator>) 
  .add("definition", () => <Text placeholder='enter your new word here...' labelName="word-input">Def</Text>)

storiesOf('form elements', module)
  .addDecorator(( story ) => <ThemeDecorator>{ story() }</ThemeDecorator>) 
  .add("Search (without Icon label)", () => <Search placeholder='enter your new word here...' labelName="word-input" onClick={ tempfunc }></Search>)
  .add("CheckBox", () => <CheckBox labelName="word-input" onChange={ tempfunc }>Sample Word</CheckBox>)
