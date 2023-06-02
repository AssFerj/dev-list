import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import ListDevSection from '../components/ListDevSection/ListDevSection';

const Home: React.FC = () => {

  return (
    <React.Fragment>
      <HeroSection 
        title='A maior plataforma de currículos para Dev do mundo.' 
        subTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, voluptatibus voluptatem vel amet blanditiis laborum molestias repudiandae ad ea quae nostrum nulla repellat optio modi dolor nisi. Repellendus, quaerat ab!.'
      />
      <ListDevSection
        title='Conheça nossos Devs' 
        subTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, voluptatibus voluptatem vel amet blanditiis laborum molestias repudiandae ad ea quae nostrum nulla repellat optio modi dolor nisi. Repellendus, quaerat ab!.'
      />
    </React.Fragment>
  );
};

export default Home;
