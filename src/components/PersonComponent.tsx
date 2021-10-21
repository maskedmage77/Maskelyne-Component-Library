import Circle from "./Circle";
import './PersonComponent.css';
import { MdMessage, MdVideocam, MdPhone } from 'react-icons/md';
import { headerColor } from '../constants/colors'
import Region from "./Region";
import StatusIndicator from "./StatusIndicator";

interface Props {
  size?: string;
  imageUri?: string;
  name?: string;
  role?: string;
  description?: string;
  status?: string;
}



export default function PersonComponent({ size, imageUri, name, role, description, status }: Props) {
  
  let initials = '';
  if (name) {
    const matches = name.match(/\b(\w)/g);
    initials = matches?.join('') + '';
  }

  switch (size) {
    case 'large':
      return (
        <div className="PersonComponentLarge">
          <Circle imageUri={ imageUri } initials={initials} size="large"></Circle>
          <div className="Info">
            <span title={ name }>{ name }</span>
            <span title={ role }>{ role }</span>
            <p>{ description }</p>
            <Region>
              <Circle>
                <MdPhone color={ headerColor }/>
              </Circle>
              <Circle>
                <MdMessage color={ headerColor }/>
              </Circle>
              <Circle>
                <MdVideocam color={ headerColor }/>
              </Circle>
            </Region>
          </div>
        </div>
      )
    default:
      return (
        <div className="PersonComponent">
        <Circle imageUri={ imageUri } initials={initials} ></Circle>
        <StatusIndicator status={status} />
        <div className="Info">
          <span title={ name }>{ name }</span>
          <span title={ role }>{ role }</span>
        </div>
      </div>
      );
  } 
}
