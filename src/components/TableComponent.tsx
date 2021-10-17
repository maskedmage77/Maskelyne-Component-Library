import './TableComponent.css';
import toCurrency from '../utils/toCurrency'

interface Props {
  data: Array<object>;
  columnTypes: Array<string>;
}

export default function TableComponent({ data, columnTypes }: Props) {

  const columnNames = Object.keys(data[0]).map(
    (columnName => (
      <th title={columnName} key={columnName}>{columnName}</th>
    ))
  );

  const dataFormatter = (datatype: string, data: string) => {
    switch(datatype) {
      case 'default': 
        return data;
      case 'currency':
        return toCurrency(data);
      case 'date':
        const date = new Date(parseInt(data));
        return date.toLocaleDateString("en-US");
      default:
        return data;
    }
  };

  return (
    <table className="TableComponent">
      <thead>
        <tr>
          { columnNames }
        </tr>
      </thead>
      <tbody>
      {
        data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            { Object.values(row).map((value, index) => (
              <td title={value} key={index}>
                { dataFormatter(columnTypes[index], value) }
              </td>  
            ))}
          </tr>
        ))
      }  
      </tbody>
    </table>
  )
}
