/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';
import {ThemeProvider, LightTheme} from '../../index.js';
import {StatefulSlider} from '../index.js';

export const name = 'slider-rtl';

export const component = () => (
  <ThemeProvider theme={{...LightTheme, direction: 'rtl'}}>
    <div
      dir="rtl"
      style={{
        maxWidth: '500px',
      }}
    >
      <StatefulSlider />
    </div>
  </ThemeProvider>
);
