import * as React from 'react';
import {StatefulSelect} from 'baseui/select';

export default () => (
  <StatefulSelect
    options={[
      {id: 'AliceBlue', color: '#F0F8FF'},
      {id: 'AntiqueWhite', color: '#FAEBD7'},
      {id: 'Aqua', color: '#00FFFF'},
      {id: 'Aquamarine', color: '#7FFFD4'},
      {id: 'Azure', color: '#F0FFFF'},
      {id: 'Beige', color: '#F5F5DC'},
    ]}
    labelKey="id"
    valueKey="color"
    onChange={event => console.log(event)}
    overrides={{
      Popover: {
        props: {
          overrides: {
            Body: {style: {marginTop: '0', marginBottom: '0'}},
          },
        },
      },
    }}
  />
);
