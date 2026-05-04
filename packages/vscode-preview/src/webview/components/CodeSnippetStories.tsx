/**
 * Copyright IBM Corp. 2018, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { CodeSnippet, Stack } from '@carbon/react';

export const stories = [
  {
    name: 'Single Line',
    render: () => (
      <Stack gap={4}>
        <CodeSnippet type="single">
          yarn add @carbon/react
        </CodeSnippet>
        <CodeSnippet type="single" feedback="Copied to clipboard">
          npm install @carbon/react
        </CodeSnippet>
      </Stack>
    ),
  },
  {
    name: 'Multi Line',
    render: () => (
      <CodeSnippet type="multi">
        {`import { Button } from '@carbon/react';

function App() {
  return <Button>Click me</Button>;
}`}
      </CodeSnippet>
    ),
  },
  {
    name: 'Inline',
    render: () => (
      <Stack gap={4}>
        <div>
          Here is some <CodeSnippet type="inline">inline code</CodeSnippet> in a
          sentence.
        </div>
        <div>
          You can use the{' '}
          <CodeSnippet type="inline">useState</CodeSnippet> hook in React
          components.
        </div>
      </Stack>
    ),
  },
  {
    name: 'With Line Numbers',
    render: () => (
      <CodeSnippet type="multi" showMoreText="Show more" showLessText="Show less">
        {`1  import React from 'react';
2  import { Button } from '@carbon/react';
3  
4  function App() {
5    return (
6      <div>
7        <Button>Primary</Button>
8        <Button kind="secondary">Secondary</Button>
9      </div>
10   );
11 }`}
      </CodeSnippet>
    ),
  },
  {
    name: 'Disabled',
    render: () => (
      <Stack gap={4}>
        <CodeSnippet type="single" disabled>
          yarn add @carbon/react
        </CodeSnippet>
        <CodeSnippet type="multi" disabled>
          {`import { Button } from '@carbon/react';

function App() {
  return <Button>Click me</Button>;
}`}
        </CodeSnippet>
      </Stack>
    ),
  },
  {
    name: 'Light Variant',
    render: () => (
      <Stack gap={4}>
        <CodeSnippet type="single" light>
          yarn add @carbon/react
        </CodeSnippet>
        <CodeSnippet type="multi" light>
          {`import { Button } from '@carbon/react';

function App() {
  return <Button>Click me</Button>;
}`}
        </CodeSnippet>
      </Stack>
    ),
  },
];

// Made with Bob