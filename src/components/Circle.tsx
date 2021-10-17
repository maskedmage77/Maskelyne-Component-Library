import { ReactElement, JSXElementConstructor, ReactNodeArray, ReactPortal } from 'react';
import './Circle.css';
 
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
export default function Circle({ children }: Props) {
  return (
    <div className="circle">
      <div>
      { children }
      </div>
    </div>
  )
}
