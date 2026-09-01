import { cn } from '../../utils';

export function Card({ children, className }) {
  return <div className={cn('card', className)}>{children}</div>;
}
