import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ThemeDecorator from '../ThemeDecorator';
import DefNode from './DefNode';
import DefTree from './DefTree';
import WordForm from './WordForm';
import { posItem } from '../PosSelect/posItems';


import { sampleWord, sampleDefs } from './sampleWord';

//const onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void = (e) => {};
//const onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {};
const onDefChange: (newValue: posItem | string, targetId: number, property: string) => void = (n, t, p) => {};
const onNewDefClick: () => void = () => {};
const onDeleteDefClick: (targetId: number) => void = () => {};

storiesOf('Form/Word', module)
  .addDecorator(( story ) => <ThemeDecorator>{ story() }</ThemeDecorator>) 
  .add("Def Node Component", () => <DefNode def={ sampleDefs[0] } isOpen={ true } onDeleteDefClick={ onDeleteDefClick } initialSearchInput="initial Search Input" onDefChange={ onDefChange }></DefNode>)
  .add("Def Tree Component", () => <DefTree defs={ sampleDefs } onNewDefClick={ onNewDefClick } onDeleteDefClick={ onDeleteDefClick } initialSearchInput="initial Search Input" onDefChange={ onDefChange }></DefTree>)
  .add("Word", () => <WordForm word={ sampleWord }/>); 



