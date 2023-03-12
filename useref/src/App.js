import CarDetails from './CarDetails';

export function App() {

  return (
    <div>
      <CarDetails initialData={{ model: '', year: '', color: '' }} />
    </div>
  );
}

