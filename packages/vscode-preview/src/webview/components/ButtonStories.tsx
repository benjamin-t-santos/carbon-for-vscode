/**
 * Copyright IBM Corp. 2018, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Button, Stack } from '@carbon/react';
import { Add } from '@carbon/icons-react';

export const stories = [
  {
    name: 'Default (Primary)',
    render: () => (
      <Stack gap={4}>
        <Button kind="primary">Button</Button>
        <Button kind="primary" renderIcon={Add}>
          Button
        </Button>
        <Button kind="primary" renderIcon={Add} iconDescription="Add" hasIconOnly />
      </Stack>
    ),
  },
  {
    name: 'Secondary',
    render: () => (
      <Stack gap={4}>
        <Button kind="secondary">Button</Button>
        <Button kind="secondary" renderIcon={Add}>
          Button
        </Button>
        <Button kind="secondary" renderIcon={Add} iconDescription="Add" hasIconOnly />
      </Stack>
    ),
  },
  {
    name: 'Tertiary',
    render: () => (
      <Stack gap={4}>
        <Button kind="tertiary">Button</Button>
        <Button kind="tertiary" renderIcon={Add}>
          Button
        </Button>
        <Button kind="tertiary" renderIcon={Add} iconDescription="Add" hasIconOnly />
      </Stack>
    ),
  },
  {
    name: 'Ghost',
    render: () => (
      <Stack gap={4}>
        <Button kind="ghost">Button</Button>
        <Button kind="ghost" renderIcon={Add}>
          Button
        </Button>
        <Button kind="ghost" renderIcon={Add} iconDescription="Add" hasIconOnly />
      </Stack>
    ),
  },
  {
    name: 'Danger',
    render: () => (
      <Stack gap={4}>
        <Button kind="danger">Button</Button>
        <Button kind="danger" renderIcon={Add} iconDescription="Add" hasIconOnly />
        <Button kind="danger--tertiary">Danger tertiary</Button>
        <Button kind="danger--tertiary" renderIcon={Add} iconDescription="Add" hasIconOnly />
        <Button kind="danger--ghost">Danger ghost</Button>
        <Button kind="danger--ghost" renderIcon={Add} iconDescription="Add" hasIconOnly />
      </Stack>
    ),
  },
  {
    name: 'Disabled',
    render: () => (
      <Stack gap={4}>
        <Button kind="primary" disabled>
          Button
        </Button>
        <Button kind="primary" renderIcon={Add} iconDescription="Add" hasIconOnly disabled />
        <Button kind="secondary" disabled>
          Button
        </Button>
        <Button kind="secondary" renderIcon={Add} iconDescription="Add" hasIconOnly disabled />
      </Stack>
    ),
  },
  {
    name: 'Sizes',
    render: () => (
      <Stack gap={4}>
        <Button size="xs">Extra Small</Button>
        <Button size="xs" renderIcon={Add} iconDescription="Add" hasIconOnly />
        <Button size="sm">Small</Button>
        <Button size="sm" renderIcon={Add} iconDescription="Add" hasIconOnly />
        <Button size="md">Medium</Button>
        <Button size="md" renderIcon={Add} iconDescription="Add" hasIconOnly />
        <Button size="lg">Large</Button>
        <Button size="lg" renderIcon={Add} iconDescription="Add" hasIconOnly />
        <Button size="xl">Extra Large</Button>
        <Button size="xl" renderIcon={Add} iconDescription="Add" hasIconOnly />
        <Button size="2xl">2XL</Button>
        <Button size="2xl" renderIcon={Add} iconDescription="Add" hasIconOnly />
      </Stack>
    ),
  },
];

// Made with Bob
