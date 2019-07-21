import * as React from 'react';

interface IProps {
  userInfo: IModel.IUser;
}

export function UserPanel(props: IProps) {
  const { userInfo } = props;
  return (
    <div>
      <h3>用户信息</h3>
      <img width={100} src={userInfo.avatar_url} />
      {
        Object.keys(userInfo).map((k) => (
          <div key={k}>
            <span>{k}:</span>
            &nbsp;
            <span>{(userInfo as any)[k]}</span>
          </div>
        ))
      }
    </div>
  );
}
