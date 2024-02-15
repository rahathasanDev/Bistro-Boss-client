import { useEffect, useState } from "react";
import Sectiontitle from "../../../Components/Sectiontitle/Sectiontitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopulerMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch('menu.json')
      .then((res) => res.json())
      .then((data) => {
        const populerItems = data.filter((item) => item.category === "popular");
        setMenu(populerItems);
      });
  }, []);
  return (
    <section className="mb-12">
      <Sectiontitle
        heading={"From Our Menu"}
        subHeading={"Populer Items"}
      ></Sectiontitle>
      <div className="grid md:grid-cols-3 gap-10">
        {menu.map((item) => (
          <MenuItem 
          key={item._id} 
          item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopulerMenu;
