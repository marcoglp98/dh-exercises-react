import Welcome from './Welcome';
import Counter from './ClickCounter';
import GithubUser from './GithubUser';
import { Routes, Route } from 'react-router-dom';

export const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Welcome name='Clara' />} />
      <Route path='/counter' element={<Counter />} />
      <Route path='/users/:username' element={<GithubUser />} />
    </Routes>
  )
}
