import Welcome from './Welcome';
import Counter from './ClickCounter';
import GithubUser from './GithubUser';
import { Routes, Route, Link } from 'react-router-dom';

export const App = () => {

  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/counter'>Counter</Link>
      <Link to='/users/Marcoglp98'>Github</Link>
      <Routes>
        <Route path='/' element={<Welcome name='Clara' />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/users/:username' element={<GithubUser />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

