import { JSXElementConstructor, ReactElement, ReactNodeArray, ReactPortal } from 'react';
import './Region.css';

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
  direction?: string;
}

export default function Region({ children, direction } : Props) {
  return (
    <div className={`${direction === "vertical" ? "VerticalRegion" : "HorizontalRegion"}`}>
      { children }
    </div>
  )
}
