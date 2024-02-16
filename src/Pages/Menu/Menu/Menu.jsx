import {  Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import PopulerMenu from '../../Home/PopulerMenu/PopulerMenu';

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>
      <PopulerMenu></PopulerMenu>
      <Cover img={menuImg} title="our menu"></Cover>
      <PopulerMenu></PopulerMenu>
      <Cover img={menuImg} title="our menu"></Cover>
      <PopulerMenu></PopulerMenu>
     
    </div>
  );
};

export default Menu;