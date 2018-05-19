import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Form } from '../components/Form/';

storiesOf('Form', module)
  .add('basic', () => <Form />);
