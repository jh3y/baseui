/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// @flow

import React, {Children} from 'react';

import {LocaleContext} from '../locale/index.js';
import type {BreadcrumbsPropsT} from './types.js';
import type {BreadcrumbLocaleT} from './locale.js';
import {StyledRoot, StyledList, StyledListItem} from './styled-components.js';
import {getOverrides} from '../helpers/overrides.js';

type LocaleT = {|locale?: BreadcrumbLocaleT|};
export function BreadcrumbsRoot(props: {|...BreadcrumbsPropsT, ...LocaleT|}) {
  const {overrides = {}} = props;
  const childrenWithSeparators = [];

  const [Root, baseRootProps] = getOverrides(overrides.Root, StyledRoot);
  const [List, baseListProps] = getOverrides(overrides.List, StyledList);
  const [ListItem, baseListItemProps] = getOverrides(
    overrides.ListItem,
    StyledListItem,
  );

  Children.forEach(props.children, (child, index) => {
    childrenWithSeparators.push(
      <ListItem
        key={`breadcrumb-item-${index}`}
        $itemIndex={index}
        $separator={props.separator}
        $separatorStyles={props.separatorStyles}
        {...baseListItemProps}
      >
        {child}
      </ListItem>,
    );
  });

  return (
    <Root
      aria-label={
        props.ariaLabel || (props.locale ? props.locale.ariaLabel : '')
      }
      data-baseweb="breadcrumbs"
      {...baseRootProps}
    >
      <List {...baseListProps}>{childrenWithSeparators}</List>
    </Root>
  );
}

function Breadcrumbs(props: BreadcrumbsPropsT) {
  return (
    <LocaleContext.Consumer>
      {locale => <BreadcrumbsRoot {...props} locale={locale.breadcrumbs} />}
    </LocaleContext.Consumer>
  );
}

Breadcrumbs.defaultProps = {
  overrides: {},
  separator: '>',
  separatorStyles: {},
};

export default Breadcrumbs;
