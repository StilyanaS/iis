import React from "react";
import "./blog.css";
import Article from "../../components/article/Article";
import {plc, blog1,blog2,blog3,blog4} from'./import';
const Blog = () => {
  return (
    <div className="robots__blog section__padding" id="blog">
      <div className="robots__blog-heading">
        <h1 className="gradient__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
      </div>
      <div className="robots__blog-container">
        <div className="robots__blog-container-groupA">
          <Article imgUrl={plc} alt="What is PLC" title="What is a PLC" date="Oct 21, 2021"/>
        </div>
        <div className="robots__blog-container-groupB">
          <Article imgUrl={blog1} altText="blog1" date="Oct 21, 2021" title="Robot and Cobots"/>
          <Article imgUrl={blog2} altText="blog2" date="Oct 21, 2021" title="Robots and Cobots"/>
          <Article imgUrl={blog3} altText="blog3" date="Oct 21, 2021" title="Robots and Cobots"/>
          <Article imgUrl={blog4} altText="blog4" date="Oct 21, 2021" title="Robots and Cobots"/>
        </div>
      </div>
    </div>
  );
};

export default Blog;
