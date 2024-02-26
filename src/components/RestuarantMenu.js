import { IMG_CDN_URL, menu_IMG } from "../utils/Config";
import useRestuarantMenu from "../utils/useRestuarantMenu";
import { useParams } from "react-router-dom";
import MenuCard from "./menuCard";

const RestuarantMenu = () => {
  const params = useParams();
  const { id } = params;
  const { restaurant, menu } = useRestuarantMenu(id);
  let menuList=[];
  (!menu)? <h1>Not available</h1> : menuList =  Object.values(menu).map(item=>item?.card?.info)
  
  console.log(menuList);
 
  return (
    <>
    <h1>
          {restaurant?.name},{restaurant?.areaName}
        </h1>
    <div className="menuPage">
      <div className="resto_dtls">
        {/* <h1>Restaurant ID : {restaurant?.id}</h1> */}
        
        <img
          className="resto_img"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
        />
      </div>
      <div className="menuList">
        
        { (!menuList) ? <h1>resto is not open </h1>:
        menuList.map((item, id) => {
          return <MenuCard {...item} key={id} />;
        })}
      </div>
      </div>

      {/* {menuList.map((item,id)=><li key={id} className="menuList"><img className="menuImg" src={menu_IMG + item?.imageId} />-{item.name} - <button className="addItemBtn">Add</button></li>)} */}
    </>
  );
};

export default RestuarantMenu;
