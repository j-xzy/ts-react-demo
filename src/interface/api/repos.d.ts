interface IApi {
  /**
   * 仓库信息
   */
  '/users/{name}/repos': {
    get: {
      params: {
        name: string;
      };
      body: never;
      querys: never;
      response: IModel.IRepo[];
    };
    put: never;
    delete: never;
    post: never;
  }
}
