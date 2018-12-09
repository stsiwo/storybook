import * as React from 'react';
import { storiesOf } from '@storybook/react';
import SecondButton from '../src/SecondButton';

storiesOf('SecondButton', module)
  .add('with Close text', () => <SecondButton text="Close"></SecondButton>)
  .add('with Confirm text', () => <SecondButton text="Confirm"></SecondButton>);

