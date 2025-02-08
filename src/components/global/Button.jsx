const Button = ({ children, onClick, className = '', ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`font-inter-medium text-sm px-4 py-2 rounded-full transition-colors duration-300 bg-primary text-primary-foreground hover:bg-primary-dark dark:bg-primary-dark dark:hover:bg-primary ${className}`}
      props
    >
      {children}
    </button>
  );
};

export default Button;
