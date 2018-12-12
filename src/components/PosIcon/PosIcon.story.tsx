import * as React from 'react';
import { storiesOf } from '@storybook/react';
import PosIcon from './PosIcon';
import ThemeDecorator from '../ThemeDecorator';

storiesOf('PosIcon', module)
  .addDecorator(( story ) => <ThemeDecorator>{ story() }</ThemeDecorator>) 
  .add('n.', () => <PosIcon checked={ true }>n.</PosIcon>)
  .add('v.', () => <PosIcon checked={ true }>v.</PosIcon>)
  .add('adj.', () => <PosIcon checked={ true }>adj.</PosIcon>)
  .add('adv.', () => <PosIcon checked={ true }>adv.</PosIcon>)
  .add('prop.', () => <PosIcon checked={ true }>prop.</PosIcon>)
  .add('prep.', () => <PosIcon checked={ true }>prep.</PosIcon>)
  .add('conj.', () => <PosIcon checked={ true }>conj.</PosIcon>)
  .add('interj.', () => <PosIcon checked={ true }>interj.</PosIcon>)
  .add('idiom', () => <PosIcon checked={ true }>idiom</PosIcon>)
