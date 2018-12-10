import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '../src/components/Icon';
import svgIcon from '../src/assets/new.svg';

storiesOf('Icon', module)
  .add('new', () => <Icon svgSrc={svgIcon}></Icon>)
  

