import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Select from './Select';
import PosSelect from './PosSelect';
import ThemeDecorator from '../ThemeDecorator';

const items = [
  {
    value: "item1",
  },
  {
    value: "item2",
  },
  {
    value: "item3",
  },
  {
    value: "item4",
  }
];

const selectedItem =   {
    value: "item2",
  };
const labelName = "select-item";

const tempFunc: () => void = () => {};
storiesOf('Select and PosSelect', module)
  .addDecorator(( story ) => <ThemeDecorator>{ story() }</ThemeDecorator>) 
  .add("Select component", () => <Select items={ items } selectedItem={ selectedItem } labelName={ labelName } handleChange={tempFunc}></Select>)
  .add("PosSelect component", () => <PosSelect items={ items } selectedItem={ selectedItem } labelName={ labelName } handleChange={tempFunc}></PosSelect>)

