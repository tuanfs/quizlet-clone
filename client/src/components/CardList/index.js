import React from "react";
import CardItem from "../CardItem";

export default function CardList({ listCourse = [] }) {
  return (
    <div className='grid grid-cols-12 gap-4'>
      {listCourse.map((item, index) => (
        <CardItem key={index} itemCard={item} />
      ))}
    </div>
  );
}
