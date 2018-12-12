import * as React from 'react';
import { storiesOf } from '@storybook/react';
import LetterIcon from './LetterIcon';
import ThemeDecorator from '../ThemeDecorator';

storiesOf('LetterIcon', module)
  .addDecorator(( story ) => <ThemeDecorator>{ story() }</ThemeDecorator>) 
  .add('n.', () => <LetterIcon checked={ true }>n.</LetterIcon>)
  .add('v.', () => <LetterIcon checked={ true }>v.</LetterIcon>)
  .add('adj.', () => <LetterIcon checked={ true }>adj.</LetterIcon>)
