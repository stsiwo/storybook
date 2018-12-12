import * as React from 'react';
import { storiesOf } from '@storybook/react';
import InputText from './InputText';
import ThemeDecorator from '../ThemeDecorator';

storiesOf('InputText', module)
  .addDecorator(( story ) => <ThemeDecorator>{ story() }</ThemeDecorator>) 
  .add("Primary", () => <InputText placeholder='enter your new word here...'></InputText>)
