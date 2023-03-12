import Welcome from './Welcome';
import { Routes, Route } from 'react-router-dom';

export const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Welcome name='Clara' />} />
    </Routes>
  )
}

