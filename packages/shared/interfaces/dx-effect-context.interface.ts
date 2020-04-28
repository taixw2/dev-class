/* eslint-disable @typescript-eslint/no-explicit-any */

import { Dispatch } from 'react';
import { EffectTypeInterface } from './dx-effect-type.interface';
import { SpyStatic } from './dx-spy.interface';
import { EnhancerFunctionSupportInterface } from './dx-effect-support.interface';

export interface BaseEffectContextInterface<T> {
  action: T;

  dispatch: Dispatch<any>;

  inst: symbol;

  meta: EffectTypeInterface;

  getState: () => any;
}

export interface EffectContextInterface<T> extends BaseEffectContextInterface<T> {
  sentinels: EnhancerFunctionSupportInterface[];

  guards: EnhancerFunctionSupportInterface[];

  spies: SpyStatic[];
}