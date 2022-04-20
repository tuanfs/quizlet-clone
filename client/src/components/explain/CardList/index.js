import React from "react";
import CardItem from "../CardItem";

export default function CardList({ listTab }) {
  return (
    <div className='grid grid-cols-12 gap-5 mt-5'>
      {listTab.map((item, index) => {
        let result = [];
        for (let i = 0; i < 6; i++) {
          result.push(<CardItem key={i} item={item} />);
        }
        return result;
      })}
    </div>
  );
}
