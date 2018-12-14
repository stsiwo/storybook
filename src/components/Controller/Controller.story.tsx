import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ControllerItem from './ControllerItem';
import Controller from './Controller';
import ThemeDecorator from '../ThemeDecorator';
const newIcon = require('./assets/new.svg');
//const searchIcon = require('./assets/search.svg');
//const editIcon = require('./assets/edit.svg');
//const sortIcon = require('./assets/sort.svg');
//const deleteIcon = require('./assets/delete.svg');
//const selectAllIcon = require('./assets/selectAll.svg');

//const tempFunc: (e: React.MouseEvent<HTMLElement>) => void = (e) => {};

storiesOf('ControllerItem and Controller', module)
  .addDecorator(( story ) => <ThemeDecorator>{ story() }</ThemeDecorator>) 
  .add("'new' Controller item", () => <ControllerItem svgSrc={newIcon}>New</ControllerItem>)
  .add("Controller component", () => <Controller></Controller>)


