import { Link } from 'react-router-dom';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCategory = ({items , title , img}) => {
  return (
    <div className='pt-8'>
      {title && <Cover img={img} title={title}></Cover>}
       <div className="grid md:grid-cols-2  gap-6 my-16 p-8 ">
        {items.map((item) => (
          <MenuItem
          key={item._id} 
          item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}><button className="btn btn-outline mt-2  border-1 border-b-4 text-black ">Order Now</button></Link>
    </div>
  );
};

export default MenuCategory;