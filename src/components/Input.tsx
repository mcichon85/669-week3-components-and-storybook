import type { InputHTMLAttributes } from 'react';

import './Input.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
}

export function Input({ label, error, hint, id, className = '', ...props }: InputProps) {
  const inputId = id ?? `input-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  const descriptionId = error || hint ? `${inputId}-description` : undefined;

  return (
    <div className="input-field">
      <label className="input-field__label" htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        aria-describedby={descriptionId}
        aria-invalid={Boolean(error)}
        className={`input-field__control ${error ? 'input-field__control--error' : ''} ${className}`.trim()}
        {...props}
      />
      {(error || hint) && (
        <p className={error ? 'input-field__error' : 'input-field__hint'} id={descriptionId}>
          {error ?? hint}
        </p>
      )}
    </div>
  );
}
