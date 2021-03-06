import * as React from "react";
import { Link } from 'gatsby';
import { useState } from 'react';

//components
import popular from '../docs/data/popular'

//styles
import '../styles/card.sass';

const Popular_components: React.FC = () => {
  const [isHover, setHover] = useState(false);
  const [ID, setID] = useState(-1);

  const popular_list = popular.map((post) =>
  (
    <div className="card">
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
        {/* {(isHover && ID == post.id) ? <img
          className="star"
          src="https://user-images.githubusercontent.com/45661217/146631169-54b842c2-d174-488b-9192-02780e57b2a5.png"
        ></img> : null} */}
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




