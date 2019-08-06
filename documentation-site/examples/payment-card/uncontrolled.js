// @flow
import * as React from 'react';
import {StatefulPaymentCard} from 'baseui/payment-card';

export default () => (
  <StatefulPaymentCard
    placeholder="Please enter your credit card number..."
    onChange={e => console.log(e.target.value)}
  />
);
