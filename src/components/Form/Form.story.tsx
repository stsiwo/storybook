import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ThemeDecorator from '../ThemeDecorator';
import DefNode from './DefNode';
import DefTree from './DefTree';
import { posItem, posItems } from '../PosSelect/posItems';

const defaultItem: posItem = posItems[0]; 


const onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void = (e) => {};
const onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {};

storiesOf('Form/Word', module)
  .addDecorator(( story ) => <ThemeDecorator>{ story() }</ThemeDecorator>) 
  .add("Def Node Component", () => <DefNode initialTextValue="" onSelectChange={ onSelectChange } onTextChange={ onTextChange } selectedItem={ defaultItem } isOpen={ true }></DefNode>)
  .add("Def Tree Component", () => <DefTree initialTextValue="" onSelectChange={ onSelectChange } onTextChange={ onTextChange } selectedItem={ defaultItem }></DefTree>)



