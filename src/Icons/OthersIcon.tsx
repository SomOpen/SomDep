export default function OthersIcon({dimension = 24, color = "currentColor"}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 24 24"
    >
      <g fill={color}>
        <path d="M7 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m7-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0m3 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></path>
        <path
          fillRule="evenodd"
          d="M0 5a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3zm3-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  );
}
