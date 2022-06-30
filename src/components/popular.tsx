import * as React from "react";
import { Link } from 'gatsby';
import { useState } from 'react';

//components
import popular from '../docs/data/popular'

//styles
import '../styles/card.sass';

const Popular_components: React.FC = () => {
  const [isHover, setHover] = useState<boolean>(false);
  const [ID, setID] = useState<number>(-1);

  const popular_list = popular.map((post, i) =>
  (
    <div className="card" key={i}>
      <div className="imgbox">
      <Link to={`postitem/?name=${post.filename}`} >
        <img
          src={require(`../assets/images/${post.img}.png`).default}
          alt={post.img}
          onMouseOver={function () {
            setHover(true)
            setID(post.id)
          }}
          onMouseOut={function () {
            setHover(false)
            setID(-1)
          }}
        />
      </Link>
      </div>
        <h3>{post.title}</h3>
    </div>
  ));

  return (
    <section>
    <div className="header">인기있는 블로그</div>
        <div className="container">
            {popular_list}
        </div>
    </section>
  )
}

export default Popular_components;




