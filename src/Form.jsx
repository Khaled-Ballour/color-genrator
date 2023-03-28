import { useState } from 'react';

const Form = () => {
  const [color, setColor] = useState('');
  const handleSubmit = () => {};
  return (
    <section className="container">
      <h4>Color Generator</h4>
      <form
        className="color-form"
        onSubmit={handleSubmit}
        onChange={(e) => setColor(e.target.value)}
      >
        <input type="color" value={color} />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"
        />
        <button className="btn" type="submit" style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  );
};
export default Form;
