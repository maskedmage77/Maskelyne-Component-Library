import { ChangeEventHandler } from 'react'
import './Input.css'

interface Props {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  error?: boolean;
  errorMessage?: string;
}

export default function InputComponent({ 
  placeholder, 
  type, 
  value,
  onChange, 
  error, 
  errorMessage 
}: Props) {
  return ( 
    <div className="InputComponent">
      <input type={type} 
      placeholder={ error ? errorMessage : placeholder} 
      className={ error ? "error" : ""} 
      value={value} 
      onChange={onChange}
      />
    </div>
  )
}

