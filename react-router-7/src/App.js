import Welcome from './Welcome';
import Counter from './ClickCounter';
import GithubUserList from './GithubUserList';
import ShowGithubUser from './ShowGithubUser';
import NotFound from './NotFound';
import { Routes, Route, Link } from 'react-router-dom';

export const App = () => {

  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/counter'>Counter</Link>
      <Link to='/users'>Github Users</Link>
      <Link to='/users/Marcoglp98'>Github</Link>
      <Routes>
        <Route path='/' exact element={<Welcome name='Clara' />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/users' element={<GithubUserList />} >
          <Route index element={<p>Seleziona utente</p>} />
          <Route path=':username' element={<ShowGithubUser />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}
