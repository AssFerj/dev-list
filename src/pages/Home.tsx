import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import ListDevSection from '../components/ListDevSection/ListDevSection';
import { useAppSelector } from '../store/hooks';
import { selectAll } from '../store/modules/usersSlice';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const UsersRedux = useAppSelector(selectAll);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!UsersRedux.length){
      navigate('/');
    }
  },[UsersRedux]);

  return (
    <React.Fragment>
      <HeroSection 
        title='A maior plataforma de currículos para Dev do mundo.' 
        subTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, voluptatibus voluptatem vel amet blanditiis laborum molestias repudiandae ad ea quae nostrum nulla repellat optio modi dolor nisi. Repellendus, quaerat!'
      />
      <ListDevSection
        title='Conheça nossos Devs' 
        subTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, voluptatibus voluptatem vel amet blanditiis laborum molestias repudiandae ad ea quae nostrum nulla repellat optio modi dolor nisi. Repellendus, quaerat!'
      />
    </React.Fragment>
  );
};

export default Home;
