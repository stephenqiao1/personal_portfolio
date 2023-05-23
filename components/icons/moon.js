const MoonIcon = props => {
  return (
    <svg
      width={20}
      height={20}
      className="w-5 inline-block transition-transform group-hover:rotate-[20deg]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="black"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
};

export default MoonIcon;
