import { MouseEventHandler } from 'react'
import './Button.css'

interface Props {
  text: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function Button({ text, disabled, onClick, loading }: Props) {

  let className = '';

  if (disabled) {
    className = 'DisabledButton'
  } else {
    if (loading) {
      className = 'LoadingButton'
    } else {
      className = 'Button'
    }
  }

  return (
    <div className={ className }>
      <button disabled={ disabled || loading } onClick={onClick}>
        { text }
      </button>
    </div>
  )
}
