import Sectiontitle from "../../../Components/Sectiontitle/Sectiontitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopulerMenu = () => {
  const [menu] =useMenu();
  const popular = menu.filter (item =>item.category === 'popular')



  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch('menu.json')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const populerItems = data.filter((item) => item.category === "popular");
  //       setMenu(populerItems);
  //     });
  // }, []);
  return (
    <section className="mb-12">
      <Sectiontitle
        heading={"From Our Menu"}
        subHeading={"Populer Items"}
      ></Sectiontitle>
      <div className="grid md:grid-cols-2 gap-8 p-8">
        {popular.map((item) => (
          <MenuItem 
          key={item._id} 
          item={item}></MenuItem>
        ))}
      </div>
      <button className="btn btn-outline mt-2  border-1 border-b-4 text-black ">View Full Menu</button>
    </section>
  );
};

export default PopulerMenu;
