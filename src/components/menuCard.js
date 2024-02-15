import { menu_IMG } from "../utils/Config";
import { useSelector,useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuCard = ({ name, imageId, price, description }) => {
const dispatch =useDispatch();

  const addHandler =(name)=>{
    dispatch(addItem(name))
    
  }

  return (
    <div className="menuCard">
      <img className="menuImg" src={menu_IMG + imageId} />
      <div className="menuCard_dtls">
        <h3 className="resto_name"> {name}</h3>
        <h4 style={{height:"5rem",overflow:"hidden"}}>{description}</h4>
        <h5>{price / 100}/-</h5>
        <button className="addItemBtn" onClick={()=>addHandler(name)}>Add</button>
      </div>
    </div>
  );
};

export default MenuCard;
