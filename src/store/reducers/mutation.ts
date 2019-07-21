import update from 'immutability-helper';
import { IGetState } from '../createStore';

export function updateUser(getState: IGetState, user: IModel.IUser) {
  return update(getState(), {
    user: {
      $set: user
    }
  });
}

export function updateRepos(getState: IGetState, repos: IModel.IRepo[]) {
  return update(getState(), {
    repos: {
      $set: repos
    }
  });
}
