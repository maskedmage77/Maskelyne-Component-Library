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
  centered?: boolean;
}

export default function Card({ children , centered }: Props) {
  return (
    <div className="Card" style={{ alignItems: centered ? 'center' : 'left' }}>
      { children }
    </div>
  )
}
