import './InputComponent.css'

interface Props {
  placeholder?: string;
  type?: string;
}

export default function InputComponent({ placeholder, type }: Props) {
  return ( 
    <div className="InputComponent">
      <input type={type} placeholder={placeholder}></input>
    </div>
  )
}

