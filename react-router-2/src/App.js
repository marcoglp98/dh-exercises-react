import Welcome from './Welcome';
import Counter from './ClickCounter';
import { Routes, Route } from 'react-router-dom';

export const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Welcome name='Clara' />} />
      <Route path='/counter' element={<Counter />} />
    </Routes>
  )
}

