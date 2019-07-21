interface IApi {
  /**
   * 用户信息
   */
  '/users/{name}': {
    get: {
      params: {
        name: string;
      };
      body: never;
      querys: never;
      response: IModel.IUser;
    };
    put: never;
    delete: never;
    post: never;
  }
}