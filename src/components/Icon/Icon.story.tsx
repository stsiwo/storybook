import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from './Icon';

import newIcon from './assets/new.svg';
import editIcon from './assets/edit.svg';
import sortIcon from './assets/sort.svg';
import deleteIcon from './assets/delete.svg';
import selectAllIcon from './assets/selectAll.svg';
import uploadIcon from './assets/upload.svg';
import uploadImageIcon from './assets/uploadImage.svg';
import searchImageIcon from './assets/searchImage.svg';
import calOldIcon from './assets/calOld.svg';
import calNewIcon from './assets/calNew.svg';
import alphaAscIcon from './assets/alphaAsc.svg';
import searchIcon from './assets/search.svg';
import alphaDescIcon from './assets/alphaDesc.svg';

storiesOf('Icon', module)
  .add('new', () => <Icon svgSrc={newIcon} checked={ true }></Icon>)
  .add('edit', () => <Icon svgSrc={editIcon}></Icon>)
  .add('sort', () => <Icon svgSrc={sortIcon}></Icon>)
  .add('delete', () => <Icon svgSrc={deleteIcon}></Icon>)
  .add('selectAll', () => <Icon svgSrc={selectAllIcon}></Icon>)
  .add('upload', () => <Icon svgSrc={uploadIcon}></Icon>)
  .add('uploadImage', () => <Icon svgSrc={uploadImageIcon}></Icon>)
  .add('searchImage', () => <Icon svgSrc={searchImageIcon}></Icon>)
  .add('calOld', () => <Icon svgSrc={calOldIcon}></Icon>)
  .add('calNew', () => <Icon svgSrc={calNewIcon}></Icon>)
  .add('alphaAsc', () => <Icon svgSrc={alphaAscIcon}></Icon>)
  .add('search', () => <Icon svgSrc={searchIcon}></Icon>)
  .add('alphaDesc', () => <Icon svgSrc={alphaDescIcon}></Icon>)
  .add('new with checked (clicked)', () => <Icon svgSrc={newIcon} checked={ true }></Icon>)
  .add('edit with checked (clicked)', () => <Icon svgSrc={editIcon} checked={ true }></Icon>)
  .add('sort with checked (clicked)', () => <Icon svgSrc={sortIcon} checked={ true }></Icon>)
  .add('delete with checked (clicked)', () => <Icon svgSrc={deleteIcon} checked={ true }></Icon>)
  .add('selectAll with checked (clicked)', () => <Icon svgSrc={selectAllIcon} checked={ true }></Icon>)
  .add('upload with checked (clicked)', () => <Icon svgSrc={uploadIcon} checked={ true }></Icon>)
  .add('uploadImage with checked (clicked)', () => <Icon svgSrc={uploadImageIcon} checked={ true }></Icon>)
  .add('searchImage with checked (clicked)', () => <Icon svgSrc={searchImageIcon} checked={ true }></Icon>)
  .add('calOld with checked (clicked)', () => <Icon svgSrc={calOldIcon} checked={ true }></Icon>)
  .add('calNew with checked (clicked)', () => <Icon svgSrc={calNewIcon} checked={ true }></Icon>)
  .add('alphaAsc with checked (clicked)', () => <Icon svgSrc={alphaAscIcon} checked={ true }></Icon>)
  .add('search with checked (clicked)', () => <Icon svgSrc={searchIcon} checked={ true }></Icon>)
  .add('alphaDesc with checked (clicked)', () => <Icon svgSrc={alphaDescIcon} checked={ true }></Icon>)

