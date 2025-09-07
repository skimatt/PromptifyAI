const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <svg
        className="w-12 h-12 animate-starPulse"
        viewBox="0 0 24 24"
        fill="url(#grad)"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
        <path d="M12 2L15.5 8.5L22 12L15.5 15.5L12 22L8.5 15.5L2 12L8.5 8.5L12 2Z" />
      </svg>
    </div>
  );
};

export default LoadingSpinner;
