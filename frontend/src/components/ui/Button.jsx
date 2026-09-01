import { cn } from '../../utils';

export function Button({
  children,
  variant = 'primary',
  className,
  type = 'button',
  onClick,
  href,
  ...props
}) {
  const classes = cn('btn', `btn--${variant}`, className);

  if (href) {
    return (
      <a className={classes} href={href} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
