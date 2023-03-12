import { useRef } from 'react';

export const CarDetails = ({ initialData, onSubmit }) => {
  const formRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      model: formRef.current.model.value,
      year: formRef.current.year.value,
      color: formRef.current.color.value,
    };
    formRef.current.reset();
    console.log(data)
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <label htmlFor="model">Modello:</label>
      <input name="model" type="text" defaultValue={initialData.model} />
      <label htmlFor="year">Anno:</label>
      <input name="year" type="number" defaultValue={initialData.year} />
      <label htmlFor="color">Colore:</label>
      <input name="color" type="text" defaultValue={initialData.color} />
      <button type="submit">Invia</button>
    </form>
  );
};

