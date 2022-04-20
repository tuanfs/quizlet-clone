import React, { useEffect, useState } from "react";
import TopicItemSection from "../TopicItemSection";
import Sidebar from "../Sidebar";
import { useLocation } from "react-router-dom";
import { getTopicByPath } from "../../../services/topicService";
import { Link } from "react-router-dom";

export default function TopicSection() {
  const [topic, setTopic] = useState(null);
  const [parentTopic, setParentTopic] = useState(null);
  const path = useLocation();

  useEffect(() => {
    const pathParent = path.pathname.split("/").at(-2);
    const pathName = path.pathname.split("/").at(-1);
    let parentTopicNew;
    if (pathParent !== path.pathname.split("/").at(1)) {
      parentTopicNew = getTopicByPath(pathParent);
    }
    const content = getTopicByPath(pathName);
    setParentTopic(parentTopicNew);
    setTopic(content);
  }, [path]);

  return (
    <div className='mt-12'>
      {topic && (
        <>
          <div className='mb-10'>
            <div>
              {parentTopic ? (
                ""
              ) : (
                <p className='text-[#939bb4] text-sm font-semibold'>
                  {topic.subTitle}
                </p>
              )}
              {parentTopic && (
                <div>
                  <Link
                    to={`/${parentTopic.url}`}
                    className='text-[#939bb4] hover:text-[#303545] text-sm font-semibold mr-2'
                  >
                    {parentTopic.subTitle}
                  </Link>
                  <span className='text-[#939bb4] text-sm font-semibold'>
                    \ {topic.subTitle}
                  </span>
                </div>
              )}
            </div>

            {/* <span className='text-[#afaeae] font-medium ml-2'>{}</span> */}
            <h3 className='text-[#303545] mt-4 text-[38px] font-bold'>
              {topic.title}
            </h3>
          </div>
          <div className='grid grid-cols-12'>
            <div className='lg:col-start-1 hidden lg:block lg:col-end-3'>
              <Sidebar listItem={topic.sidebar} />
            </div>
            <div className='2xl:col-start-3 2xl:col-end-11 lg:col-start-3 lg:col-end-13 col-start-1 col-end-13'>
              <Sidebar sidebarRow={true} listItem={topic.sidebar} />
              <TopicItemSection content={topic.list} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
