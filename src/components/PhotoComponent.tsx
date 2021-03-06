import "./PhotoComponent.css"

interface Props {
  uri: string;
  width: number;
  height?: number;
  round?: boolean;
  alt?: string;
}

export default function PhotoComponent({ uri, width, height, round, alt }: Props) {
  return (
    <div className="PhotoComponent" style={{ 
      width: `${width}em`, 
      height: `${height ? height : width}em`,
      borderRadius: `${round ? width / 2 : 1}em`
    }}>
      <img src={ uri } alt={ alt }/>
    </div>
  )
}
