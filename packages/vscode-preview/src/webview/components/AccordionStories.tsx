/**
 * Copyright IBM Corp. 2018, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Accordion, AccordionItem, Stack } from '@carbon/react';

export const stories = [
  {
    name: 'Default',
    render: () => (
      <Accordion>
        <AccordionItem title="Section 1 title">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </AccordionItem>
        <AccordionItem title="Section 2 title">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </AccordionItem>
        <AccordionItem title="Section 3 title">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </AccordionItem>
      </Accordion>
    ),
  },
  {
    name: 'With Open Item',
    render: () => (
      <Accordion>
        <AccordionItem title="Section 1 title" open>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </AccordionItem>
        <AccordionItem title="Section 2 title">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </AccordionItem>
        <AccordionItem title="Section 3 title">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </AccordionItem>
      </Accordion>
    ),
  },
  {
    name: 'Flush Alignment',
    render: () => (
      <Accordion align="start">
        <AccordionItem title="Section 1 title">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </AccordionItem>
        <AccordionItem title="Section 2 title">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </AccordionItem>
        <AccordionItem title="Section 3 title">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </AccordionItem>
      </Accordion>
    ),
  },
  {
    name: 'Disabled Items',
    render: () => (
      <Accordion>
        <AccordionItem title="Section 1 title">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </AccordionItem>
        <AccordionItem title="Section 2 title (disabled)" disabled>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </AccordionItem>
        <AccordionItem title="Section 3 title">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </AccordionItem>
      </Accordion>
    ),
  },
  {
    name: 'Sizes',
    render: () => (
      <Stack gap={6}>
        <div>
          <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>
            Small (sm)
          </h4>
          <Accordion size="sm">
            <AccordionItem title="Section 1 title">
              <p>Small accordion content</p>
            </AccordionItem>
            <AccordionItem title="Section 2 title">
              <p>Small accordion content</p>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>
            Medium (md) - Default
          </h4>
          <Accordion size="md">
            <AccordionItem title="Section 1 title">
              <p>Medium accordion content</p>
            </AccordionItem>
            <AccordionItem title="Section 2 title">
              <p>Medium accordion content</p>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>
            Large (lg)
          </h4>
          <Accordion size="lg">
            <AccordionItem title="Section 1 title">
              <p>Large accordion content</p>
            </AccordionItem>
            <AccordionItem title="Section 2 title">
              <p>Large accordion content</p>
            </AccordionItem>
          </Accordion>
        </div>
      </Stack>
    ),
  },
];

// Made with Bob