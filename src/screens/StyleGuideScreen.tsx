import HorizontalRegion from '../components/HorizontalRegion'
import NewsCard from '../components/NewsCard'
import PersonComponent from '../components/PersonComponent'
import VerticalRegion from '../components/VerticalRegion'
import TableComponent from '../components/TableComponent'

export default function StyleGuideScreen() {

  const tableData = require('../constants/sampleTableData.json');

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

      </NewsCard>
      {/* Table Component */}
      <NewsCard title="Table Component">
          <VerticalRegion>  
            <p>Culpa eu ipsum esse ea aliqua ullamco voluptate id aliqua.</p>
            <TableComponent data={tableData} 
              columnTypes={['default', 'default', 'currency', 'date']}
            />
          </VerticalRegion>
      </NewsCard>
    </div>
  )
}
