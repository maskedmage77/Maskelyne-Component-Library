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
  gapless?: boolean;
}

export default function Region({ children, vertical, gapless = false } : Props) {
  return (
    <div className={`${vertical ? "VerticalRegion" : "HorizontalRegion"}`} 
      style={{ gap: gapless ? '0em' : '1em'}}
    >
      { children }
    </div>
  )
}
