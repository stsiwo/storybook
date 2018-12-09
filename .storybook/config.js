import { configure, addDecorator } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';

addDecorator(withNotes);

const req = require.context('../stories/', true, /\.story\.tsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
