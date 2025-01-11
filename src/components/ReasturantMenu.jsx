import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";

const ReasturantMenu = () => {
  const params = useParams();
  const resId = params?.resId;

  const resInfo = useResturantMenu(resId);

  return Object.keys(resInfo).length === 0 ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{resInfo?.resName}Resturant Name</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Pepsi</li>
      </ul>
    </div>
  );
};

export default ReasturantMenu;
