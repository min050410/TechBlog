import * as React from "react";
import { useState, useEffect } from "react"
import { Link } from 'gatsby';

//components
import recent from '../md/recent'

//styles
import '../styles/recent.sass'

const Recent_components = () => {
  if (location === undefined) {
    return null;
  }
  else if (location.search == null) {
    return null;
  }
  else {
    const [filter_key, setFilter_key] = useState("");
    const so = () => {
      //useEffect용 비동기를 위한 함수
    }
    so();
    const params = new URLSearchParams(location.search);
    useEffect(() => {
      setFilter_key(params.get("f"))
    }, [so])

    //filter함수를 통한 필터링
    const recent_list = recent.filter(word => word.filter == filter_key || filter_key == null).map((post) =>
    (
      <div className="recent_content">
        <Link to={`postitem/?name=${post.filename}`}>
          <div className="post">
            <div className="left">
              {/* <Link to="postitem/" state={{ myProp: post.filename }}> */}
              <div className="imgbox">
                <img
                  src={require(`../assets/images/${post.img}.png`).default}
                  alt={post.img}
                />
              </div>
              <div id="text_group">
                <h3>{post.title}</h3>
                <div>{post.date}</div>
              </div>
              {/* star */}
              {/* <img className="copylink" src="https://user-images.githubusercontent.com/45661217/146631169-54b842c2-d174-488b-9192-02780e57b2a5.png"></img> */}
            </div>
            <div className="tag">
              {(post.tag) ? <span>{post.tag}</span> : null}
              {(post.tag2) ? <span>{post.tag2}</span> : null}
              {(post.tag3) ? <span>{post.tag3}</span> : null}
            </div>
          </div>
        </Link>
      </div>
    ));

    return (
      <section>
        <div className="header_wrap">
          <div className="header">최근 블로그</div>
          {filter_key ? <span className="filter">✨{filter_key} 필터 적용됨</span> : null}
        </div>
        <div className="horizontal_container">
          {recent_list}
        </div>
      </section>
    )
  }
}

export default Recent_components;




