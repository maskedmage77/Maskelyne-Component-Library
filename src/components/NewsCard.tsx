import { ReactElement, JSXElementConstructor, ReactNodeArray, ReactPortal } from 'react';
import './NewsCard.css';

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
  title?: string;
}

export default function NewsCard({ children, title }: Props) {
  return (
    <div className="NewsCard">
      { title && <h1>{ title }</h1> }
      { children }
    </div>
  );
}
