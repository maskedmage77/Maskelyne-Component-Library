import HorizontalRegion from '../components/HorizontalRegion'
import NewsCard from '../components/NewsCard'
import PersonComponent from '../components/PersonComponent'
import VerticalRegion from '../components/VerticalRegion'
import TableComponent from '../components/TableComponent'
import CodeComponent from '../components/CodeComponent'
import { useState } from 'react'

export default function StyleGuideScreen() {

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
      <NewsCard title="Style Guide"> 
        <p>Non eu elit voluptate sit et fugiat non ullamco aute elit do excepteur veniam est. Est laboris minim aliqua labore cillum excepteur voluptate reprehenderit ullamco nulla laboris id cillum sint. Laborum proident adipisicing irure id reprehenderit qui enim do consequat cillum ex irure id esse. Laborum enim sint laboris eu velit fugiat amet nisi et aute quis. Laboris commodo deserunt ullamco duis officia. Mollit irure enim proident est nostrud esse. Laborum consectetur laborum pariatur ea et officia nisi.</p>
      </NewsCard>

      {/* Person Component */}
      <NewsCard title="Person Component">
        <HorizontalRegion>
          <VerticalRegion>
            <PersonComponent imageUri="https://www.sacmag.com/wp-content/uploads/sites/50/2020/12/HI_RES_FIN_IMG_8626.jpg" name="Joan Crane" role="Product Manager" />
            <PersonComponent imageUri="https://www.sacmag.com/wp-content/uploads/sites/50/2020/12/HI_RES_FINAL_8J4A0425.jpg" name="Mitchell Gardner" role="Senior Developer"/>
            <PersonComponent imageUri="https://wrisenergy.org/wp-content/uploads/2019/06/Professional-headshot-square.jpg" name="Autumn Justice" role="Junior Account Executive"/>
          </VerticalRegion>
          {/* <p>Duis et aliqua pariatur elit mollit sit fugiat magna adipisicing nulla. Commodo irure id nostrud non. Esse aliqua cupidatat sit velit nulla velit incididunt aliquip cupidatat exercitation esse. Incididunt et labore minim cupidatat tempor tempor non deserunt fugiat nisi laborum. Reprehenderit consectetur esse consectetur anim dolor eiusmod sint nulla dolore aute excepteur elit sunt eiusmod. Adipisicing id Lorem laboris sit enim. Incididunt tempor labore excepteur laborum id pariatur.</p> */}
        </HorizontalRegion>
      </NewsCard>

      {/* Code Component */}
      <NewsCard title="Code Component">
        <VerticalRegion>
          <p>The Code Component will allow for children to be passed in in the form of plain text. It uses an html pre tag to ignore html formatting. It also allows for scrolling inside the code component. Scrollbars are hidden for visual appeal.</p>
          <CodeComponent>         
            { codeExample }
          </CodeComponent>
        </VerticalRegion>
      </NewsCard>

      {/* Table Component */}
      <NewsCard title="Table Component">
          <VerticalRegion>  
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
          </VerticalRegion>
      </NewsCard>
    </div>
  )
}
