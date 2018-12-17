import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from './Modal';
import ThemeDecorator from '../ThemeDecorator';
import { selectItemTitle, selectItemDetail } from './modalText';
import ModalTest from './ModalTest';

interface button {
  name: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const closeBtn: button = {
  name: "Close",
  onClick: (e) => {}, 
}
 
storiesOf('Modal', module)
  .addDecorator(( story ) => <ThemeDecorator>{ story() }</ThemeDecorator>) 
  .add("plz select item Modal", () => <Modal title={ selectItemTitle } detail={ selectItemDetail } closeButton={ closeBtn } isOpen={ true }></Modal>)
  .add("test Modal", () => <ModalTest title={ selectItemTitle } detail={ selectItemDetail }></ModalTest>)
