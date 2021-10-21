import './CaraselleGalleryComponent.css'
import PhotoComponent from './PhotoComponent';

interface Props {
  width: number;
  height: number;
  paths: Array<string>;
}

export default function GridGalleryComponent({ width, height, paths }: Props) {

  const imageRenders = paths.map((image) =>  <img src={image} />);

  return (
    <div 
      style={{ 
        width: `${width}em`, 
        height: `${height}em`
      }} 
      className="CaraselleGalleryComponent" 
    >
        {imageRenders}
    </div>
  )
}
