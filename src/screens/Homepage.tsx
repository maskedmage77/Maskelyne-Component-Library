import NewsCard from '../components/NewsCard'
import PersonComponent from '../components/PersonComponent'
import Region from '../components/Region'
import TableComponent from '../components/TableComponent'
import CodeComponent from '../components/CodeComponent'
import PhotoComponent from '../components/PhotoComponent'
import PropertyComponent from '../components/documentation/PropertyComponent'
import Input from '../components/form/Input'
import Card from '../components/Card'
import Button from '../components/form/Button'
import { useEffect, useState } from 'react'
import Switch from '../components/form/Switch'
import Select from '../components/form/Select'

export default function Homepage() {

  const [codeExample,setCodeExample] = useState('');
  const [controlledInput,setControlledInput] = useState('');
  const [selectedOption,setSelectedOption] = useState<string[]>([]);

  const onChange = (event: any) => {
    setControlledInput(event.target.value);
  };

  const handleSelect = (event: any) => {
    const value = event.currentTarget.getAttribute("data-value");
    if (event.ctrlKey) {
      if (!selectedOption.includes(value)) {
        selectedOption[0] === ''
        ? setSelectedOption([value])
        : setSelectedOption([...selectedOption, value]);
      } else {
        setSelectedOption(selectedOption.filter(item => item !== value));
      }
    } else {
      setSelectedOption([value]);
    }
  }

  useEffect(() => {
    fetch('./examples/exampleCode.txt')
    .then((r) => r.text())
    .then(text => {
      setCodeExample(text);
    })  
  }, [])


    const tableData = require('../constants/sampleTableData.json');

    return (
      <div className="CardWrapper">
        {/* Style Guide */}
        <NewsCard title="Maskelyne Component Library"> 
          <p>The Maskelyne Component Library is a collection of React Components designed to be performant, accessible, and beautiful. The Maskelyne Component Library was created by Jacob Hines. </p>
        </NewsCard>

        {/* Input Component */}
        <NewsCard title="Input Component">
          <Region>
            <Region vertical>
            <h2>Outside a Card</h2>
              <Input 
                placeholder="Controlled Input"
                value={controlledInput}
                onChange={onChange}
              />
              <Input 
                placeholder="Error"
                error
                errorMessage="Sample Error Message"
              />
              <Input 
                placeholder="Password"
              />
            </Region>
            <Region vertical>
              <Card centered>
              <h2>Inside a Card</h2>
              <Input 
                placeholder="Controlled Input"
                type="email"
                value={controlledInput}
                onChange={onChange}
              />
              <Input 
                placeholder="Error"
                error
                errorMessage="Sample Error Message"
              />
              <Input 
                placeholder="Password"
              />
              </Card>
            </Region>
          </Region>
          <PropertyComponent
            name="placeholder"
            optional
            type="string"
            description="Provide the placeholder text for the input."
          />
          <PropertyComponent
            name="type"
            optional
            type="string"
            description="Provide the type of input."
          />
          <PropertyComponent
            name="value"
            optional
            type="string"
            description="A value can be provided to set the inputs value. This can be used in conjunction with onChange to create controlled inputs."
          />
          <PropertyComponent
            name="onChange"
            optional
            type="function"
            description="Provide a function to call once the value of the input has been changed."
          />
          <PropertyComponent
            name="error"
            optional
            type="boolean"
            description="If set true the input will be red."
          />
          <PropertyComponent
            name="errorMessage"
            optional
            type="string"
            description="This message will replace the placeholder message if an error is true."
          />
        </NewsCard>

        {/* Select Component */}
        <NewsCard title="Select Component">
          <Region vertical>
          <p>{ selectedOption }</p>
            <Select 
            options={[
              {
                value:"0",
                displayed:"Example of a potential multi-line option",
              },
              {
                value:"1",
                displayed:"Option 2",
              },
              {
                value:"2",
                displayed:"Option 3"
              },
              {
                value:"3",
                displayed:"Option 4"
              },
              {
                value:"4",
                displayed:"Option 5"
              },
              {
                value:"5",
                displayed:"Option 6"
              },
              {
                value:"6",
                displayed:"Option 7"
              },
              {
                value:"7",
                displayed:"Option 8"
              },
              {
                value:"8",
                displayed:"Option 9"
              },
              {
                value:"9",
                displayed:"Option 10"
              },
              {
                value:"10",
                displayed:"Option 11"
              },
              {
                value:"11",
                displayed:"Option 12"
              },
              {
                value:"12",
                displayed:"Option 13"
              },
              {
                value:"13",
                displayed:"Option 14"
              },
              {
                value:"14",
                displayed:"Option 15"
              }
            ]}
            onChange={handleSelect}
            selected={selectedOption}
            defaultText="Multi Select"
          />
          
          </Region>
        </NewsCard>

        {/* Button Component */}
        <NewsCard title="Button Component">
          <Region vertical>
            <p>This component provides a stylized button.</p>
            <Region>
              <Region vertical>
                <h2>Outside a Card</h2>
                <Button text="Alert" onClick={() => {alert('Thanks for clicking me!')}} />
                <Button text="Disabled" disabled />
                <Button text="Loading..." loading />
              </Region>
              <Region vertical>
                <Card centered>
                <h2>Inside a Card</h2>
                  <Button text="Alert" onClick={() => {alert('Thanks for clicking me!')}} />
                  <Button text="Disabled"  disabled />
                  <Button text="Loading..." loading />
                </Card>
              </Region>
            </Region>
          </Region>
          <PropertyComponent
            name="text"
            type="string"
            description="Provide text for inside the button."
          />
          <PropertyComponent
            name="disabled"
            optional
            type="boolean"
            description="If this property is true a button will not be clickable. If disabled and loading are both passed in as true disabled styles will take precedence."
          />
          <PropertyComponent
            name="loading"
            optional
            type="boolean"
            description="If this property is true a button will not be clickable and will fade in and out to indicate to the user a background process is occurring."
          />
          <PropertyComponent
            name="onClick"
            optional
            type="function"
            description="This can be used as if it was regular html button's onClick."
          />
        </NewsCard>

        {/* Switch Component */}
        <NewsCard title="Switch Component">
          <Region vertical>
            <p>This component provides a stylized button.</p>
            <Region>
              <Region vertical>
                <h2>Outside a Card</h2>
                <Switch />
                <Switch />
              </Region>
              <Region vertical>
                <Card centered>
                <h2>Inside a Card</h2>
                <Switch />
                <Switch />
                </Card>
              </Region>
            </Region>
          </Region>
          <PropertyComponent
            name="toggled"
            optional
            type="boolean"
            description="The switch will be activated if true."
          />
          <PropertyComponent
            name="onToggle"
            optional
            type="function"
            description="Pass in a function to be called when toggled."
          />
          
        </NewsCard>

        {/* Person Component */}
        <NewsCard title="Person Component">
          <Region vertical>
            <p>This component can be used to display information about a person, user, or account in a pleasant looking container. It can also display a users current status.</p>
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
          </Region>
          <PropertyComponent
            name="size"
            optional
            default_value="small"
            type="string"
            description="Specify the size of the component. Acceptable values include small and large."
          />
          <PropertyComponent
            name="imageUri"
            optional
            default_value="(will use initials)"
            type="string"
            description="Provide the location of the image file."
          />
          <PropertyComponent
            name="name"
            optional
            default_value="null"
            type="string"
            description="Provide a name."
          />
          <PropertyComponent
            name="role"
            optional
            default_value="null"
            type="string"
            description="Provide a role."
          />
          <PropertyComponent
            name="status"
            optional
            default_value="null"
            type="string"
            description="Provide a status. Acceptable values include online, away, and offline."
          />
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
