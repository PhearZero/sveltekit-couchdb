import chalk from 'chalk';
import {isBrowser} from './Flags.js';

/**
 * Colors
 */
export const colors = ['red', 'yellow', 'green'].reduce((prev, current) => {
  prev[current] = (s, skip = false) => {
    return !isBrowser ? chalk[current](s) : skip ? s : `%c${s}`;
  };
  return prev;
}, {});
