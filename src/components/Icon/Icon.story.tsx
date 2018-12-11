import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from './Icon';
//import svgIcon from './assets/new.svg';
//import json from './assets/myjson.json';
//const svgIcon = require('./assets/new.svg')
import { svgIcon } from './assets/new.svg';

storiesOf('Icon', module)
  .add('new', () => <Icon svgSrc={svgIcon}></Icon>)
  

