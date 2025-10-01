import {lighten} from "../utils/colorUtils";

export const GradientBlockComponent = ({ colorBase }) => {
  const porcentajes = [0, 10, 20, 30, 40];

  return (
    <div className="cover-block-title" style={{ display: 'flex', width: '100%', height: '3%' }}>
      {porcentajes.map((p) => (
        <div
          key={p}
          style={{
            flex: 1,
            backgroundColor: lighten(colorBase, p),
          }}
        />
      ))}
    </div>
  );
};