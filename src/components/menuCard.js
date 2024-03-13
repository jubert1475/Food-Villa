import { menu_IMG } from "../utils/Config";
import { useSelector,useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuCard = (item) => {

  
const dispatch =useDispatch();

  const addHandler =(item)=>{
    dispatch(addItem(item))
    
  }

  return (
    <div className="menuCard">
      <img className="menuImg" src={menu_IMG + item.imageId} />
      <div className="menuCard_dtls">
        <h3 className="resto_name"> {item.name}</h3>
        <h4 style={{height:"5rem",overflow:"hidden"}}>{item.description}</h4>
        <h5>{item.price / 100}/-</h5>
        <button className="addItemBtn" onClick={()=>addHandler(item)}>Add</button>
      </div>
    </div>
  );
};

export default MenuCard;
