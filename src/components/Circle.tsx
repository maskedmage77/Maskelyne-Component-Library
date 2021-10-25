import { ReactElement, JSXElementConstructor, ReactNodeArray, ReactPortal } from 'react';
import './Circle.css';
import { cardColorAlt } from '../constants/colors'
 
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
  size?: string;
  color?: string;
  border?: boolean;
  initials?: string;
}
export default function Circle({ children, imageUri, altText, size, color, border, initials }: Props) {

  let sizeClass = '';
  switch (size) {
    case 'large':
      sizeClass = 'largeCircle';
      break;
    case 'small':
      sizeClass = 'smallCircle';
      break;
      case 'extra-small':
        sizeClass = 'extraSmallCircle';
        break;
    default: 
      sizeClass = '';
      break;
  }

  if (imageUri) {
    return (
      <div className="circleContainer">
        <img className={`circleImage ${ sizeClass }`} alt={altText} src={imageUri} />
      </div>
    )
  }
  else {
    return (
      <div className="circleContainer">
        <div className={`circle ${ sizeClass }`} style={{backgroundColor: color, border: border === true ? `2px solid ${cardColorAlt}` : '' }}>
          { initials ? initials : children }
        </div>
      </div>
    )
  }
}
