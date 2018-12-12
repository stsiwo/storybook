import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from './Icon';

const newIcon = require('./assets/new.svg');
const editIcon = require('./assets/edit.svg');
const sortIcon = require('./assets/sort.svg');
const deleteIcon = require('./assets/delete.svg');
const selectAllIcon = require('./assets/selectAll.svg');
const uploadIcon = require('./assets/upload.svg');
const uploadImageIcon = require('./assets/uploadImage.svg');
const searchImageIcon = require('./assets/searchImage.svg');
const calOldIcon = require('./assets/calOld.svg');
const calNewIcon = require('./assets/calNew.svg');
const alphaAscIcon = require('./assets/alphaAsc.svg');
const searchIcon = require('./assets/search.svg');
const alphaDescIcon = require('./assets/alphaDesc.svg');


storiesOf('Icon', module)
  .add('new', () => <Icon svgSrc={newIcon}></Icon>)
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

