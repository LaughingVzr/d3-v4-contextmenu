import {D3V4ContextMenu} from "./D3V4ContextMenu";

export default function (items) {
  return function (d, i, event) {
    event.preventDefault();
    let d3V4ContextMenu = new D3V4ContextMenu(items, d, i, event.target);
    d3V4ContextMenu.show(event.pageX, event.pageY);
  }
};
