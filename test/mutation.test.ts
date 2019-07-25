import { reducers } from '@/store/createStore';
import { initialState } from '@/store/state';
import { createStore } from 'type-redux';

describe('mutation', () => {
  let store = createStore(initialState, reducers);

  beforeEach(() => {
    store = createStore(initialState, reducers);
  });

  it('updateRepos', () => {
    expect(store.getState().repos).toEqual([]);
    store.commit('updateRepos', [{ id: 1, name: 'bar' }]);
    expect(store.getState().repos).toEqual([{ id: 1, name: 'bar' }]);
  });

  it('updateUser', () => {
    expect(store.getState().user).toEqual({});
    store.commit('updateUser', { name: 'bar', id: 3, company: 'x' });
    expect(store.getState().user).toEqual({ name: 'bar', id: 3, company: 'x' });
  });
});
