import React from "react";
import { useDispatch } from "react-redux";
import { setStrokeColor } from "../modules/currentStroke/slice";

const COLORS = ["#000000", "#808080", "#c0c0c0", "#ffffff", "#800000"];

export const ColorPanel = () => {
  const dispatch = useDispatch();

  const onColorChange = (color: string) => {
    dispatch(setStrokeColor(color));
  };

  return (
    <div className="window colors-panel">
      <div className="title-bar">
        <div className="title-bar-text">Colors</div>
      </div>
      <div className="window-body colors">
        {COLORS.map((color: string) => (
          <div
            key={color}
            onClick={() => {
              onColorChange(color);
            }}
            className="color"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  );
};
