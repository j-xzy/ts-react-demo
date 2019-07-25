import { reducers } from '@/store/createStore';
import { initialState } from '@/store/state';
import { createStore } from 'type-redux';

describe('action', () => {
  let store = createStore(initialState, reducers);

  beforeEach(() => {
    store = createStore(initialState, reducers);
  });

  it('getUser', async () => {
    expect(store.getState().user).toEqual({});
    await store.dispatch('getUser', 'bar');
    expect(Object.keys(store.getState().user).length).toBe(3);
  });

  it('getRepos', async () => {
    expect(store.getState().repos).toEqual([]);
    await store.dispatch('getRepos', 'bar');
    expect(store.getState().repos.length).toBeGreaterThanOrEqual(1);
  });

  it('getAllInfo', async () => {
    expect(store.getState().repos).toEqual([]);
    expect(store.getState().user).toEqual({});

    await store.dispatch('getAllInfo', 'bar');

    expect(Object.keys(store.getState().user).length).toBe(3);
    expect(store.getState().repos.length).toBeGreaterThanOrEqual(1);
  });
});
