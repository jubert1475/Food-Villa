import { useEffect,useState } from "react";
import {useParams} from "react-router-dom"
import { IMG_CDN_URL } from "./Config";

const RestuarantMenu = () => {
  const  params = useParams();
  const {id}=params;

  const [restaurant, setRestaurant]=useState();

  useEffect(()=>{
    getRestaurantMenu();
  },[])

  async function getRestaurantMenu(){
    const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.8523973&lng=74.5814773&restaurantId="+id)
    const json= await data.json();
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    console.log(json?.data?.cards[0]?.card?.card?.info);
  }


  
  return (
    <div>
      <h1>Restaurant ID : {restaurant?.id}</h1>
      <h2>Restaurant Name: {restaurant?.name}</h2>
      <img className="Resto_img" src={IMG_CDN_URL +restaurant?.cloudinaryImageId}/>
      <h2>Address: {restaurant?.areaName}</h2>
      
    </div>
  );
};

export default RestuarantMenu;

