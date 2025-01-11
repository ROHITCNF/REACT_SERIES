import { CDN_IMG_URL } from "../utils/constnats";
const ResturantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData;

  // base Url : https://media-assets.swiggy.com/swiggy/image/upload/  // sla.deliveryTime
  //   const { name, cloudinaryImageId, cuisines, avgRating, sla } = resObj;
  // console.log(name);

  return (
    <div className="res-card">
      <div className="res-img">
        <img
          height="100px"
          width="150px"
          src={CDN_IMG_URL + cloudinaryImageId}
        />
      </div>
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating} stars</p>
      <p>{sla.deliveryTime} minutes</p>
    </div>
  );
};
export default ResturantCard;
