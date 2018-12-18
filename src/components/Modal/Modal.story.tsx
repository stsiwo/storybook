import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from './Modal';
import ThemeDecorator from '../ThemeDecorator';
import { 
  selectItemTitle, 
  selectItemDetail, 
  confirmDeleteTitle,
  confirmDeleteDetail,
  sortFilterTitle,
  sortFilterDetail,
} from './modalText';
import SelectModalTest from './SelectModalTest';
import ConfirmModalTest from './ConfirmModalTest';
import SortFilterModalTest from './SortFilterModalTest';
import Sort from './Sort';
import Filter from './Filter';

interface button {
  name: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const closeBtn: button = {
  name: "Close",
  onClick: (e) => {}, 
}
const confirmBtn: button = {
  name: "Confirm",
  onClick: (e) => {}, 
}
const resetBtn: button = {
  name: "Reset",
  onClick: (e) => {}, 
}
 
storiesOf('Modal', module)
  .addDecorator(( story ) => <ThemeDecorator>{ story() }</ThemeDecorator>) 
  .add("plz select item Modal", () => <Modal title={ selectItemTitle } detail={ selectItemDetail } closeButton={ closeBtn } isOpen={ true }></Modal>)
  .add("plz confirm deletion Modal", () => <Modal title={ confirmDeleteTitle } detail={ confirmDeleteDetail } closeButton={ closeBtn } confirmButton={ confirmBtn } isOpen={ true }></Modal>)
  .add("plz confirm deletion Modal", () => <Modal title={ sortFilterTitle } detail={ sortFilterDetail } closeButton={ closeBtn } confirmButton={ confirmBtn } resetButton={ resetBtn } isOpen={ true }></Modal>)
  .add("select item warning Modal Test", () => <SelectModalTest title={ selectItemTitle } detail={ selectItemDetail }></SelectModalTest>)
  .add("confirm deletion Modal Test", () => <ConfirmModalTest title={ confirmDeleteTitle } detail={ confirmDeleteDetail }></ConfirmModalTest>)
  .add("sort filter Modal Test", () => <SortFilterModalTest title={ sortFilterTitle } detail={ sortFilterDetail }></SortFilterModalTest>)

storiesOf('Modal/Sort Filter Conent', module)
  .addDecorator(( story ) => <ThemeDecorator>{ story() }</ThemeDecorator>) 
  .add("Sort radio input", () => <Sort ></Sort>)
  .add("Filter checkbox input", () => <Filter ></Filter>)

