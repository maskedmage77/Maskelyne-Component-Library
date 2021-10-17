import Circle from "./Circle";
import './PersonComponent.css';

interface Props {
  imageUri?: string;
  name?: string;
  role?: string;
}

export default function PersonComponent({ imageUri, name, role }: Props) {
  return (
    <div className="PersonCard">
      <Circle imageUri={ imageUri }></Circle>
      <div className="Info">
        <span title={ name }>{ name }</span>
        <span title={ role }>{ role }</span>
      </div>
    </div>
  )
}


