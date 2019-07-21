import { createStore } from 'type-redux';
import { reducers } from '../src/store/createStore';
import { initialState } from '../src/store/state';

describe('mutation', () => {
  let store = createStore(initialState, reducers);

  beforeEach(() => {
    store = createStore(initialState, reducers);
  });

  it('', () => {
    expect(true).toBe(true);
  });
});
