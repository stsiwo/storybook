import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/index';

storiesOf('Button', module)
  .add('with text', () => (
    <Button>TypeScript</Button>
  ))
  .add('with some emoji', () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
