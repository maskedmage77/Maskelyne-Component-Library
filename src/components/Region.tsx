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
  vertical?: boolean;
}

export default function Region({ children, vertical } : Props) {
  return (
    <div className={`${vertical ? "VerticalRegion" : "HorizontalRegion"}`}>
      { children }
    </div>
  )
}
