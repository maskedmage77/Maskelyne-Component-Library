import NewsCard from '../components/NewsCard'
import PersonComponent from '../components/PersonComponent'
import Region from '../components/Region'
import TableComponent from '../components/TableComponent'
import CodeComponent from '../components/CodeComponent'
import { useState } from 'react'

export default function Homepage() {

  const tableData = require('../constants/sampleTableData.json');

  const [codeExample, setCodeExample] = useState('');

  fetch('1')
  .then((r) => r.text())
  .then(text => {
    setCodeExample(text);
  })  

  return (
    <div className="CardWrapper">
      
      {/* Style Guide */}
      <NewsCard title="Maskelyne Design System"> 
        <p>The Maskelyne Design System is a collection of React Components designed to be performant, accessible, and beautiful. The Maskelyne Design System was created by Jacob Hines. </p>
      </NewsCard>

      {/* Person Component */}
      <NewsCard title="Person Component">
        <Region>
          <Region direction="vertical">
            <PersonComponent imageUri="https://www.sacmag.com/wp-content/uploads/sites/50/2020/12/HI_RES_FIN_IMG_8626.jpg" name="Joan Crane" role="Product Manager" status="online" />
            <PersonComponent imageUri="https://www.sacmag.com/wp-content/uploads/sites/50/2020/12/HI_RES_FINAL_8J4A0425.jpg" name="Mitchell Gardner" role="Senior Developer" status="offline"/>
            <PersonComponent imageUri="https://wrisenergy.org/wp-content/uploads/2019/06/Professional-headshot-square.jpg" name="Autumn Justice" role="Junior Account Executive" status="away"/>
          </Region>
          <PersonComponent 
            size="large" 
            imageUri="https://images.squarespace-cdn.com/content/v1/5c9cdb1592441bce92afa94b/1631211912167-J0CI4ONKY8VJX0EPOGM2/Kennan+Murphy-Sierra+Headshot+square.jpeg?format=750w"
            name="Jason Hurst"
            role="Web Developer"
            description="React Native developer with 2 years of experience creating high quality apps."
          />
        </Region>
      </NewsCard>

       {/* Table Component */}
      <NewsCard title="Table Component">
        <Region direction="vertical">  
          <div>
          <p>The Table Component has a data property that allows you to pass in an array of objects. Every object must have the same properties to display properly on the table. There is an optional property named columnTypes that accepts an array of strings. These will be used to determine how the data cells will be formatted.</p>
            <h2>columnTypes</h2>
            <ul>
              <li>Default</li>
              <li>Date</li>
              <li>Currency</li>
            </ul>
          </div>
          <TableComponent data={tableData} 
            columnTypes={['default', 'default', 'currency', 'date']}
          />
        </Region>
      </NewsCard>

      {/* Code Component */}
      <NewsCard title="Code Component">
        <Region direction="vertical">
          <p>The Code Component will allow for children to be passed in in the form of plain text. It uses an html pre tag to ignore html formatting. It also allows for scrolling inside the code component. Scrollbars are hidden for visual appeal.</p>
          <CodeComponent>         
            { codeExample }
          </CodeComponent>
        </Region>
      </NewsCard>

     
    </div>
  )
}
