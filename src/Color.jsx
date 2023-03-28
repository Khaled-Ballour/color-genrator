import { toast } from 'react-toastify';

const Color = ({ index, color }) => {
  const { hex, weight } = color;
  const saveToClick = async (e) => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('Color copied to clipboard');
      } catch (error) {
        toast.error('Field to copy to clipboard');
      }
    } else {
      toast.error('Clipboard access not available');
    }
  };
  return (
    <article
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
      onClick={saveToClick}
    >
      <p className="percent-value">{weight}%</p>
      <p className="percent-value">#{hex}</p>
    </article>
  );
};
export default Color;
