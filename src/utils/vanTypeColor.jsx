function vanTypeColor(type) {
  let color;
  if (type === "simple") {
    color = "#E17654";
  } else if (type === "rugged") {
    color = "#115E59";
  } else if (type === "luxury") {
    color = "##161618";
  } else {
    color = "#000";
  }
  return color;
}
export default vanTypeColor;
