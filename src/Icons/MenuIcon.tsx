export default function MenuIcon({dimension = 24, color = "currentColor"}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 6h10M4 12h16M7 12h13M7 18h10"
      ></path>
    </svg>
  );
}
