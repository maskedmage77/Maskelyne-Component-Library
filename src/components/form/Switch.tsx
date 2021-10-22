import { ChangeEventHandler } from 'react'
import './Switch.css'

interface Props {
  toggled?: boolean;
  onToggle?: ChangeEventHandler<HTMLInputElement> | undefined;
}

export default function Switch({ toggled, onToggle }: Props) {
  return (
    <label className="Switch">
      <input type="checkbox" checked={ toggled } onChange={ onToggle } />
      <span className="slider"/>
    </label>
  )
}
