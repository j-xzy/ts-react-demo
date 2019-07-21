import { ReposPanel } from '@/components/reposPanel';
import { UserPanel } from '@/components/userPanel';
import * as React from 'react';
import './style.styl';

export function App() {
  const [name, setName] = React.useState('');
  const { user, repos } = window.useMappedState((s) => ({ user: s.user, repos: s.repos }));
  return (
    <div className='app'>
      <div className='serach'>
        搜索git用户
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={() => name && window.dispatch('getAllInfo', name)}>搜索</button>
      </div>
      <div className='panel-container'>
        <UserPanel userInfo={user} />
        <ReposPanel repos={repos} />
      </div>
    </div>
  );
}
