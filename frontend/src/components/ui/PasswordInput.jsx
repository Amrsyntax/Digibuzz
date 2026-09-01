import { useState } from 'react';
import { Icon } from './Icon';

export function PasswordInput({ id, label = 'Password', ...props }) {
  const [visible, setVisible] = useState(false);

  return (
    <label className="field field--password" htmlFor={id}>
      <span>{label}</span>
      <span className="field__control">
        <input id={id} type={visible ? 'text' : 'password'} {...props} />
        <button
          type="button"
          className="field__toggle"
          onClick={() => setVisible((value) => !value)}
          aria-label={visible ? 'Hide password' : 'Show password'}
        >
          <Icon name="eye" size={16} />
        </button>
      </span>
    </label>
  );
}