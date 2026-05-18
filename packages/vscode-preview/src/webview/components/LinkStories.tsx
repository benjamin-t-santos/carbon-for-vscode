/**
 * Copyright IBM Corp. 2018, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Link, Stack } from '@carbon/react';
import { Launch } from '@carbon/icons-react';

export const stories = [
  {
    name: 'Default',
    render: () => (
      <Stack gap={4}>
        <Link href="https://www.carbondesignsystem.com">
          Carbon Design System
        </Link>
        <Link href="https://www.ibm.com">
          IBM
        </Link>
      </Stack>
    ),
  },
  {
    name: 'Inline',
    render: () => (
      <p>
        This is a paragraph with an{' '}
        <Link href="https://www.carbondesignsystem.com" inline>
          inline link
        </Link>{' '}
        embedded in the text.
      </p>
    ),
  },
  {
    name: 'With Icon',
    render: () => (
      <Stack gap={4}>
        <Link href="https://www.carbondesignsystem.com" renderIcon={Launch}>
          External link
        </Link>
        <Link href="https://www.ibm.com" renderIcon={Launch}>
          Visit IBM
        </Link>
      </Stack>
    ),
  },
  {
    name: 'Disabled',
    render: () => (
      <Stack gap={4}>
        <Link href="https://www.carbondesignsystem.com" disabled>
          Disabled link
        </Link>
        <Link href="https://www.ibm.com" renderIcon={Launch} disabled>
          Disabled with icon
        </Link>
      </Stack>
    ),
  },
  {
    name: 'Visited',
    render: () => (
      <Stack gap={4}>
        <Link href="https://www.carbondesignsystem.com" visited>
          Visited link
        </Link>
        <Link href="https://www.ibm.com" visited inline>
          Visited inline link
        </Link>
      </Stack>
    ),
  },
  {
    name: 'Sizes',
    render: () => (
      <Stack gap={4}>
        <Link href="https://www.carbondesignsystem.com" size="sm">
          Small link
        </Link>
        <Link href="https://www.carbondesignsystem.com" size="md">
          Medium link (default)
        </Link>
        <Link href="https://www.carbondesignsystem.com" size="lg">
          Large link
        </Link>
      </Stack>
    ),
  },
];

// Made with Bob