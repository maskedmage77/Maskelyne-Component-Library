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
  imageUri?: string;
  altText?: string;
}
export default function Circle({ children, imageUri, altText }: Props) {
     
    if (imageUri) {
      return (
        <div className="circleContainer">
          <img className="circleImage" alt={altText} src={imageUri} />
        </div>
      )
    }
    else {
      return (
        <div className="circleContainer">
          <div className="circle">
            { children }
          </div>
        </div>
      )
    }
}
