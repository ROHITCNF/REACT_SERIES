import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import { RESTURANT_DATA } from "../utils/constnats";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import Search from "./Search";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);

  const handleFilterButtonClick = () => {
    const updatedListOfResturants = RESTURANT_DATA.filter((res) => {
      return res.info.avgRating > 4;
    });
    setListOfResturants(updatedListOfResturants);
  };
  const handleResetresturants = () => {
    setListOfResturants(RESTURANT_DATA);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("");
      const jsonData = await data.json();
      setListOfResturants(RESTURANT_DATA);
    } catch (error) {
      console.log(error);
      setListOfResturants(RESTURANT_DATA);
    }
  };

  const onlineFlag = useOnlineStatus();
  console.log("online flag", onlineFlag);

  if (onlineFlag === false) {
    return alert("Please check your internet connection");
  }
  //Conditional Rendering
  return listOfResturants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <Search />
        <button
          className="filter-btn"
          onClick={handleFilterButtonClick}
          onMouseOver={() => {
            console.log("Mouse hover");
          }}
        >
          Top Rated resturants
        </button>
        <button className="filter-btn" onClick={handleResetresturants}>
          Reset Resturants
        </button>
      </div>
      <div className="res-conatiner">
        {listOfResturants.map((resturant, index) => (
          <Link
            key={resturant?.info?.id}
            to={"/resturants/" + resturant?.info?.id}
          >
            <ResturantCard resData={resturant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
  //// resturantData[i].info we have to send as the props
};
export default Body;
