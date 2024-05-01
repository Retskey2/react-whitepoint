import { FC, useEffect, useRef, useState } from "react";
import usePaletteStore from "../../store/store";
import debounce from "lodash/debounce";

import "./Palette.css";

interface IPaletteItem {
  id: string;
  color: string;
}

const PaletteItem: FC<{
  item: IPaletteItem;
}> = ({ item }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHover, setIsHover] = useState(false);

  const { changeColor: onChange, removeColor: onRemove } = usePaletteStore();

  const handleVisible = () => setIsVisible(!isVisible);
  const handleRemove = () => onRemove(item.id);

  const debouncedChangeColor = debounce(onChange, 300);

  return (
    <div className="color-display-container">
      <div
        className="color-display"
        style={{ backgroundColor: item.color }}
        onClick={handleVisible}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {isHover && (
          <div
            style={{
              position: "absolute",
              top: -2,
              right: -3,
              width: 20,
              height: 20,
              display: "flex",
              borderRadius: 15,
              background: "#000",
            }}
          >
            <img
              onClick={handleRemove}
              color="#ffffff"
              src="/close.svg"
              width={14}
              height={14}
              style={{
                position: "absolute",
                right: 3,
                top: 3,
                cursor: "pointer",
                color: "#ffffff",
              }}
              alt="img"
            />
          </div>
        )}
        <div>
          <input
            type="color"
            value={item.color}
            onChange={(e) => debouncedChangeColor(item.id, e.target.value)}
            style={{
              width: 50,
              height: 50,
              padding: 0,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PaletteItem;
