import { ChangeEventHandler } from 'react'
import './Input.css'

interface Props {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

export default function InputComponent({ placeholder, type, value, onChange }: Props) {
  return ( 
    <div className="InputComponent">
      <input type={type} placeholder={placeholder} value={ value } onChange={ onChange }/>
    </div>
  )
}

