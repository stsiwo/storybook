import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Select from './Select';
import ThemeDecorator from '../ThemeDecorator';
import { posItems } from './posItems';

const labelName = "select-item";

const tempFunc: (e: React.ChangeEvent<HTMLSelectElement>) => void = (e) => {};

storiesOf('Select', module)
  .addDecorator(( story ) => <ThemeDecorator>{ story() }</ThemeDecorator>) 
  .add("Select component", () => <Select items={ posItems } selectedItem={ posItems[0] } labelName={ labelName } onChange={tempFunc}>Def.</Select>)

