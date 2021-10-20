import './Card.css'
import { ReactElement, JSXElementConstructor, ReactNodeArray, ReactPortal } from "react";

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

export default function Card({children}: Props) {
  return (
    <div className="Card">
      { children }
    </div>
  )
}
