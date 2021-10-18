import Circle from "./Circle";
import "./StatusIndicator.css"

interface Props {
  status?: string;
}

export default function StatusIndicator({ status }: Props) {
  switch (status) {
    case 'online': 
      return (
        <div className="StatusIndicator">
          <Circle size="extra-small" color="rgb(50,205,50)" border />
        </div>
      )
    case 'offline':
      return (
        <div className="StatusIndicator">
          <Circle size="extra-small" color="rgb(205,50,50)" border />
        </div>
      )
    case 'away':
      return (
        <div className="StatusIndicator">
          <Circle size="extra-small" color="rgb(205,205,50)" border />
        </div>
      )
    default:
      return null;
  } 
}