import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ThemeDecorator from '../ThemeDecorator';
import DefNode from './DefNode';
import DefTree from './DefTree';
import { posItem, posItems } from '../PosSelect/posItems';
import WordForm from './WordForm';

const defaultItem: posItem = posItems[0]; 

import { sampleWord, sampleDefs } from './sampleWord';

//const onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void = (e) => {};
//const onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {};

storiesOf('Form/Word', module)
  .addDecorator(( story ) => <ThemeDecorator>{ story() }</ThemeDecorator>) 
  .add("Def Node Component", () => <DefNode def=""  pos={ defaultItem } image="myfile" isOpen={ true } initialSearchInput="initial Search Input" ></DefNode>)
  .add("Def Tree Component", () => <DefTree defs={ sampleDefs } initialSearchInput="initial Search Input" ></DefTree>)
  .add("Word", () => <WordForm word={ sampleWord }/>); 



