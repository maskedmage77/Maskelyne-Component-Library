import { ChangeEventHandler } from 'react'
import './RadioButton.css'

interface Props {
  toggled?: boolean;
  onToggle?: ChangeEventHandler<HTMLInputElement> | undefined;
  small?: boolean;
}

export default function RadioButton({ toggled, onToggle, small = false }: Props) {
  return (
    <label className="RadioButton" style={{ transform: small ? 'scale(0.729)': '' }}>
      <input type="checkbox" checked={ toggled } onChange={ onToggle } />
      <span className="RadioDot"/>
    </label>
  )
}
