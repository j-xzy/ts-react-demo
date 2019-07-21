import * as React from 'react';

interface IProps {
  repos: IModel.IRepo[];
}

export function ReposPanel(props: IProps) {
  const { repos } = props;
  return (
    <div>
      <h3>所有仓库</h3>
      {
        repos.map((repo) => (
          <div key={repo.id}>
            <span>名称:</span>
            &nbsp;
            <span>{repo.name}</span>
          </div>
        ))
      }
    </div>
  );
}
