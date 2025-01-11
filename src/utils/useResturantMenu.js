import { useEffect, useState } from "react";

const useResturantMenu = async (resId) => {
  // Call Api and send the rsponse data
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiData = await fetch("");
    const data = apiData.json();
    setResInfo(data);
  };
  return resInfo;
};

export default useResturantMenu;
