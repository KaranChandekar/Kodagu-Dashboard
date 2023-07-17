function ColorDotTealBlue({ className, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="31"
      fill="none"
      viewBox="0 0 30 31"
      className={className}
    >
      <rect width="7" height="7" x="11" y="12.5" fill={color} rx="3.5"></rect>
    </svg>
  );
}

export default ColorDotTealBlue;
