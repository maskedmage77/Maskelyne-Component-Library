import { JSXElementConstructor, ReactElement, ReactNodeArray, ReactPortal } from 'react';
import './VerticalRegion.css';

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

export default function VerticalRegion({ children } : Props) {
  return (
    <div className="VerticalRegion">
      { children }
    </div>
  )
}
