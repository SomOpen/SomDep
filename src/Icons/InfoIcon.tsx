export default function InfoIcon({dimension = 24, color = "currentColor"}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 24 24"
    >
      <g fill="none">
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.5 16.25V5.75a3 3 0 0 1 3-3h11a1 1 0 0 1 1 1v12.5H7.375M4.5 16.245v2.38"
        ></path>
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M18.5 21.25H7a2.5 2.5 0 0 1 0-5h12.5v4a1 1 0 0 1-1 1"
        ></path>
        <path
          stroke={color}
          strokeLinecap="round"
          strokeWidth={1.5}
          d="M12 9.45v3.79"
        ></path>
        <circle cx={12} cy={6.217} r={1.197} fill={color}></circle>
      </g>
    </svg>
  );
}
