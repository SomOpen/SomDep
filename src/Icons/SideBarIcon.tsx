export default function SideBarIcon({dimension = 24, color = "currentColor"}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 24 24"
    >
      <g fill={color}>
        <path
          fillRule="evenodd"
          d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6zM7.793 9.293a1 1 0 0 1 0 1.414L6.5 12l1.293 1.293a1 1 0 1 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 1.414 0"
          clipRule="evenodd"
        ></path>
        <path d="M12 20h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-8z"></path>
      </g>
    </svg>
  );
}
