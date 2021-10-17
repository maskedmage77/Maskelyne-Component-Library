import { ReactElement, JSXElementConstructor, ReactNodeArray, ReactPortal } from 'react'
import './CodeComponent.css'

interface Props { 
  children?: string 
  | number 
  | boolean 
  | {} 
  | ReactElement<any, string 
  | JSXElementConstructor<any>> 
  | ReactNodeArray 
  | ReactPortal 
  | null 
  | undefined; 
}

export default function CodeComponent({ children } :Props) {
  return (
    <div className="CodeComponent">
      <pre>
        {children}
      </pre>
    </div>
  )
}
