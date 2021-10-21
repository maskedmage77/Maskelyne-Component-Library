interface Props {
  name: string;
  type: string;
  optional?: boolean;
  default_value?: string;
  description?: string;
}

export default function PropertyComponent({ name, type, optional, description, default_value }: Props) {
  return (
    <div>
      <h2 style={{  marginTop: '0.5em'}}>{ name }</h2>
      { optional ? <p className="headerColor" >Optional</p> : <p className="headerColor">Required</p>}
      <p>Type: <span className="headerColor">{ type }</span></p>
      { optional && default_value ? <p>Default: <span className="headerColor">{ default_value }</span></p> : null}
      <p>{ description }</p>
    </div>
  )
}
