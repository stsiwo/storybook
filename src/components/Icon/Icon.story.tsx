import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from './Icon';
import svgIcon from './assets/new.svg';
import json from './assets/myjson.json';

storiesOf('Icon', module)
  .add('new', () => <Icon svgSrc={svgIcon}></Icon>)
  

