function Dashboard({ className, active }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="31"
      fill="none"
      viewBox="0 0 30 31"
      className={className}
    >
      <path
        fill={active ? "blue" : "#C3CAD9"}
        fillRule="evenodd"
        d="M7 16.5h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm-1-17v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Dashboard;
