import './Services.css'
import Card from './Card'
import services from './data/services'

const Services = () => {

    console.log({services})

  return (
    <div className='carousel'>
     {/* &lt; services | carousel | elements &gt;<br />
     cards will go here */}
     <Card />
     <Card />
     <Card />
    </div>
  );
}

export default Services;
