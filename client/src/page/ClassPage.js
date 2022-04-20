import React from "react"
import Header from "../components/class/Header"
import Content from "../components/class/Content"
import MetaData from "../components/MetaData"

export default function ClassPage() {
  return (
    <>
      <MetaData title="Lớp học"></MetaData>
      <div className="flex mt-header dark:bg-bgDark h-screen">
        <div className="w-[90%] lg:w-[80%] 2xl:w-[70%] mx-auto">
          <div>
            <Header />
            <Content />
          </div>
        </div>
      </div>
    </>
  )
}
