import * as React from "react";
import { useState, useEffect } from "react"
import { Link } from 'gatsby';

//components
import recent from '../md/recent'

//styles
import '../styles/recent.sass'

const Recent_components: React.FC<{ location: { search: string | null } }> = ({ location }) => {
  if (location.search === undefined || location.search == null) {
    return null;
  }
  else {
    const [filterKey, setFilterKey] = useState<string | null>('');
    let queryString: string = location.search
    const params = new URLSearchParams(queryString);

    useEffect(() => {
      setFilterKey(params.get("f"));
    }, [params])

    //filter 함수를 통한 filtering 후 map
    const recent_list = recent.filter(word => word.filter == filterKey || filterKey === null).map((post) =>
    (
      <div className="recent_content">
        <Link to={`postitem/?name=${post.filename}`}>
          <div className="margin_post">
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
                {/* todo::backend */}
                {/* star */}
                {/* <img className="copylink" src="https://user-images.githubusercontent.com/45661217/146631169-54b842c2-d174-488b-9192-02780e57b2a5.png"></img> */}
              </div>
              <div className="tag">
                {(post.tag) && <span>{post.tag}</span>}
                {(post.tag2) && <span>{post.tag2}</span>}
                {(post.tag3) && <span>{post.tag3}</span>}
              </div>
            </div>
          </div>
        </Link>
      </div>
    ));
    return (
      <section>
        <div className="header_wrap">
          <div className="header">최근 블로그</div>
          {filterKey && <span className="filter-key">{filterKey}</span>}
        </div>
        <div className="horizontal_container">
          {recent_list}
        </div>
      </section>
    )
  }
}

export default Recent_components;




