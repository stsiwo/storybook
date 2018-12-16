import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './Header';
import ThemeDecorator from '../ThemeDecorator';

storiesOf('Header', module)
  .addDecorator(( story ) => <ThemeDecorator>{ story() }</ThemeDecorator>) 
  .add("Header", () => <Header></Header>)
