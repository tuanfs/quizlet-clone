import React from "react"
import {Link} from "react-router-dom"

export default function TopicItemSection(props) {
  const {content} = props
  return (
    <div>
      {content.map((item, index) => (
        <div key={index}>
          <div className="flex items-center justify-between mt-10 mb-4">
            <h3 className="text-[#303545] text-xl lg:text-[30px] mt-2 font-semibold ">
              {item.heading}
            </h3>
            <Link
              to="/"
              className="text-[#303545] hover:text-[#fecd1f] text-sm font-normal"
            >
              Xem tất cả
            </Link>
          </div>
          <div className="grid grid-cols-12 gap-4">
            {/* <CardItem topicCp={true} /> */}
            {/* <CardItem topicCp={true} /> */}
          </div>
        </div>
      ))}
    </div>
  )
}
