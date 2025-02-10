const Button = ({
  children,
  href,
  onClick = () => {},
  className = "",
  ...props
}) => {
  const baseStyles = `font-inter-medium text-sm px-4 py-2 rounded-full transition-colors duration-300 bg-primary text-primary-foreground hover:bg-primary-dark dark:bg-primary-dark dark:hover:bg-primary ${className}`;

  if (href) {
    return (
      <a href={href} className={baseStyles} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
