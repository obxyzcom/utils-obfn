import { getObj } from './utils';
import { test, expect } from 'vitest';

test('getObj', () => {
  const obj = {
    attr1: 'val01',
    attr2: 'val02',
  };
  expect(getObj(obj)).toEqual({
    attr1: 'val01',
    attr2: 'val02',
  });
});
