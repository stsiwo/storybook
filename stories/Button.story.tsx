import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/Button';

storiesOf('Button', module)
  .add('with Close text', () => <Button text="Close"></Button>)
  .add('with Confirm text', () => <Button text="Confirm"></Button>);
  
