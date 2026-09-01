import { navigate } from '../../hooks';

export function AppLink({ to, className, children, ...props }) {
  return (
    <a
      href={to}
      className={className}
      {...props}
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.button !== 0) {
          return;
        }
        event.preventDefault();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
}
