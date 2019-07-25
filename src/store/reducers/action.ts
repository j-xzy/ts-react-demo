import { ICtx } from '../createStore';

/**
 * 得到所有信息
 */
export async function getAllInfo(ctx: ICtx, name: string): Promise<any> {
  return Promise.all(
    [
      ctx.dispatch('getUser', name),
      ctx.dispatch('getRepos', name)
    ]
  );
}

/**
 * 得到用户信息
 */
export async function getUser(ctx: ICtx, name: string) {
  const user = await window.Get('/users/{name}', {
    params: {
      name
    }
  });
  ctx.commit('updateUser', user);
}

/**
 * 得到仓库信息
 */
export async function getRepos(ctx: ICtx, name: string) {
  const repos = await window.Get('/users/{name}/repos', {
    params: {
      name
    }
  });
  ctx.commit('updateRepos', repos);
}
