import usePaletteStore from "../../store/store";
import PaletteItem from "./PaletteItem";
import "./Palette.css";

export const Palette = () => {
  const { createNewPalette, palettes } = usePaletteStore();

  return (
    <section>
      <div className="color-picker-label">
        <h1>Color Picker</h1>
        <button onClick={createNewPalette}>Добавить цвет</button>
      </div>
      <div className="color-picker-container">
        {palettes.map((item) => (
          <PaletteItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};
