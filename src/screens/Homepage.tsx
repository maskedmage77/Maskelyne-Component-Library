import NewsCard from '../components/NewsCard'
import PersonComponent from '../components/PersonComponent'
import Region from '../components/Region'
import TableComponent from '../components/TableComponent'
import CodeComponent from '../components/CodeComponent'
import PhotoComponent from '../components/PhotoComponent'
import { useState } from 'react'
import PropertyComponent from '../components/documentation/PropertyComponent'

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
          <Region vertical>
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

      {/* Photo Component */}
      <NewsCard title="Photo Component">
        <Region vertical>
        <p>The Photo Component can be used to display and image with a rounded border that matches other components.</p>
          <Region>
            <Region vertical>
              <PhotoComponent uri="/images/image6.jpeg" width={14} height={14} />
              <Region>
                <PhotoComponent uri="/images/image5.jpeg" width={6.5} height={6.5} />
                <PhotoComponent uri="/images/image0.jpeg" width={6.5} round />
              </Region>
              <PhotoComponent uri="/images/image3.jpeg" width={14} height={5} />
            </Region>
            <PhotoComponent uri="/images/image1.jpeg" width={14} height={27.5}/>
            <PhotoComponent uri="/images/image5.jpeg" width={27.5} height={27.5} />
          </Region>
          <div style={{ width: '100%'}}>
            <PropertyComponent
              name="Uri"
              type="string"
              description="Provide the location of the image file."
            />
            <PropertyComponent
              name="Width"
              type="number"
              description="Determines the width of the image using the unit em."
            />
            <PropertyComponent
              name="Height"
              optional
              default_value="(equal to width)"
              type="number"
              description="Determines the height of the image using the unit em."
            />
            <PropertyComponent
              name="Round"
              optional
              default_value="false"
              type="boolean"
              description="This will force your image to be displayed as a circle using border radius."
            />
          </div>
        </Region>
      </NewsCard>
      {/* Table Component */}
      <NewsCard title="Table Component">
        <Region vertical>  
          <div>
          <p>The Table Component has a data property that allows you to pass in an array of objects. Every object must have the same properties to display properly on the table. There is an optional property named columnTypes that accepts an array of strings. These will be used to determine how the data cells will be formatted.</p>
          </div>
          <TableComponent data={tableData} 
            columnTypes={['default', 'default', 'currency', 'date']}
          />
        </Region>
      </NewsCard>

      {/* Code Component */}
      <NewsCard title="Code Component">
        <Region vertical>
          <p>The Code Component will allow for children to be passed in in the form of plain text. It uses an html pre tag to ignore html formatting. It also allows for scrolling inside the code component. Scrollbars are hidden for visual appeal.</p>
          <CodeComponent>         
            { codeExample }
          </CodeComponent>
        </Region>
      </NewsCard>

     
    </div>
  )
}
