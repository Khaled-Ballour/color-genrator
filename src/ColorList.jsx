import Color from './Color';
import { nanoid } from 'nanoid';

const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return <Color color={color} key={nanoid()} index={index} />;
      })}
    </section>
  );
};
export default ColorList;
