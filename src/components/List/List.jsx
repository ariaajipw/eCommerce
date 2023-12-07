import React from "react";
import Card from "../Card/Card";
import "./List.css";

const List = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/2705752/pexels-photo-2705752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/5797579/pexels-photo-5797579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/5604520/pexels-photo-5604520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/5533633/pexels-photo-5533633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/5885840/pexels-photo-5885840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/3099026/pexels-photo-3099026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Skirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/3805874/pexels-photo-3805874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/5870335/pexels-photo-5870335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Hat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];

  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
