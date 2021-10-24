import Circle from "./Circle";
import "./StatusIndicator.css";
import { green, yellow, red } from '../constants/colors'
 
interface Props {
  status?: string;
}

export default function StatusIndicator({ status }: Props) {
  switch (status) {
    case 'online': 
      return (
        <div className="StatusIndicator">
          <Circle size="extra-small" color={green} border />
        </div>
      )
    case 'offline':
      return (
        <div className="StatusIndicator">
          <Circle size="extra-small" color={red} border />
        </div>
      )
    case 'away':
      return (
        <div className="StatusIndicator">
          <Circle size="extra-small" color={yellow} border />
        </div>
      )
    default:
      return null;
  } 
}