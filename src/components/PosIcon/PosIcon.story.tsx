import * as React from 'react';
import { storiesOf } from '@storybook/react';
import PosIcon from './PosIcon';
import ThemeDecorator from '../ThemeDecorator';

storiesOf('PosIcon', module)
  .addDecorator(( story ) => <ThemeDecorator>{ story() }</ThemeDecorator>) 
  .add('n. with checked', () => <PosIcon checked={ true }>n.</PosIcon>)
  .add('v. with checked', () => <PosIcon checked={ true }>v.</PosIcon>)
  .add('adj. with checked', () => <PosIcon checked={ true }>adj.</PosIcon>)
  .add('adv. with checked', () => <PosIcon checked={ true }>adv.</PosIcon>)
  .add('prop. with checked', () => <PosIcon checked={ true }>prop.</PosIcon>)
  .add('prep. with checked', () => <PosIcon checked={ true }>prep.</PosIcon>)
  .add('conj. with checked', () => <PosIcon checked={ true }>conj.</PosIcon>)
  .add('interj. with checked', () => <PosIcon checked={ true }>interj.</PosIcon>)
  .add('idiom with checked', () => <PosIcon checked={ true }>idiom</PosIcon>)
  .add('n.', () => <PosIcon>n.</PosIcon>)
  .add('v.', () => <PosIcon>v.</PosIcon>)
  .add('adj.', () => <PosIcon>adj.</PosIcon>)
  .add('adv.', () => <PosIcon>adv.</PosIcon>)
  .add('prop.', () => <PosIcon>prop.</PosIcon>)
  .add('prep.', () => <PosIcon>prep.</PosIcon>)
  .add('conj.', () => <PosIcon>conj.</PosIcon>)
  .add('interj.', () => <PosIcon>interj.</PosIcon>)
  .add('idiom', () => <PosIcon>idiom</PosIcon>)
