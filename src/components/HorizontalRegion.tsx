import { JSXElementConstructor, ReactElement, ReactNodeArray, ReactPortal } from 'react';
import './HorizontalRegion.css';

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

export default function HorizontalRegion({ children } : Props) {
  return (
    <div className="HorizontalRegion">
      { children }
    </div>
  )
}
