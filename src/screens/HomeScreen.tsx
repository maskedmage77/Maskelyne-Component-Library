import Circle from '../components/Circle'
import NewsCard from '../components/NewsCard'

export default function HomeScreen() {
  return (
    <div className="CardWrapper">
      <NewsCard title="Vivance Club"> 
        <p>Non eu elit voluptate sit et fugiat non ullamco aute elit do excepteur veniam est. Est laboris minim aliqua labore cillum excepteur voluptate reprehenderit ullamco nulla laboris id cillum sint. Laborum proident adipisicing irure id reprehenderit qui enim do consequat cillum ex irure id esse. Laborum enim sint laboris eu velit fugiat amet nisi et aute quis. Laboris commodo deserunt ullamco duis officia. Mollit irure enim proident est nostrud esse. Laborum consectetur laborum pariatur ea et officia nisi.</p>
      </NewsCard>
      <NewsCard title="Test Card">
        <Circle>M</Circle>
      </NewsCard>
    </div>
  )
}
