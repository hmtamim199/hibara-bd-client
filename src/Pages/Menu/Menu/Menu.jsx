import Cover from "../Cover/Cover";
import coverImg from '../../../assets/menu/banner3.jpg'


const Menu = () => {
  return (
    
    <div>
      <Cover img={coverImg} title="our menu"></Cover>
      <h2>this is menu of our bistro boss </h2>
    </div>
  );
};

export default Menu;