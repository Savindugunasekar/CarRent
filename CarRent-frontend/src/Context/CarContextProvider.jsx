import React, { useEffect, useState } from "react";
import all_cars from "../Cardetails";
import CarContext from "./CarContext.js";

const CarContextProvider = (props) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch("http://localhost:4000/comments");
        if (!response.ok) {
          throw new Error("Failed to fetch comments");
        }
        const data = await response.json();
        setComments(data.commentList); 
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    

    fetchComments();
    
    
  }, []); 









  const contextvalue = { all_cars, comments };

  return (
    <CarContext.Provider value={contextvalue}>
      {props.children}
    </CarContext.Provider>
  );
};

export default CarContextProvider;
