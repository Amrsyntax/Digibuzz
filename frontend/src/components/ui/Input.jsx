export function Input({ id, label, type = 'text', ...props }) {
  return (
    <label className="field" htmlFor={id}>
      <span>{label}</span>
      <input id={id} type={type} {...props} />
    </label>
  );
}
