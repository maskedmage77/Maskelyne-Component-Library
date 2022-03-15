import { ChangeEventHandler } from 'react'
import './Checkbox.css'

interface Props {
  toggled?: boolean;
  onToggle?: ChangeEventHandler<HTMLInputElement> | undefined;
  small?: boolean;
}

export default function Checkbox({ toggled, onToggle, small = false }: Props) {
  return (
    <label className="Checkbox" style={{ transform: small ? 'scale(0.729)': '' }}>
      <input type="checkbox" checked={ toggled } onChange={ onToggle } />
      <span className="Check"/>
    </label>
  )
}
