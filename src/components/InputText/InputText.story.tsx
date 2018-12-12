import * as React from 'react';
import { storiesOf } from '@storybook/react';
import DefInput from './DefInput';
import WordInput from './WordInput';
import ThemeDecorator from '../ThemeDecorator';

storiesOf('InputText', module)
  .addDecorator(( story ) => <ThemeDecorator>{ story() }</ThemeDecorator>) 
  .add("WordInput (with Icon label)", () => <WordInput placeholder='enter your new word here...' labelName="word-input"></WordInput>)
  .add("DefInput (without Icon label)", () => <DefInput placeholder='enter your new word here...' labelName="word-input"></DefInput>)
