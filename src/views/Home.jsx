import React from 'react'
import cakes from '../cakes.json'
import Cards from '../components/Cards'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

const Home = () => {
  return (
    <>
    <div className='title-container'>
      <h1>...well you're at <span className="bold-text">Sad Cake</span></h1>
      <p>The place for your disapointment in life</p>
      <div className='cake-emoji'>🎂</div>
    </div>
     

      <Container className='cards-container'>
        {cakes.map((item, key) => (
          <Cards
            key={key}
            image={item.image}
            title={item.title}
            description={item.description}
            buttoncolor={item.buttoncolor}
          />
        ))}
      </Container>
    </>
  )
}

export default Home