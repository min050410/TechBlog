import * as React from "react";
import { Link } from 'gatsby';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'

//components
import recent from '../md/recent'
import popular from '../md/popular'
import Header from '../components/header'
import PostComment from '../components/comment'

//styles
import '../styles/card.sass';
import '../styles/recent.sass'

const IndexPage = () => {
  const [isHover, setHover] = useState(false);
  const [ID, setID] = useState(-1);
  //useEffect(() => {
  //  document.documentElement.lang = 'kr';
  //}, []);
  const popular_list = popular.map((post) =>
  (
    <div className="card">
      <div className="imgbox">
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
        {(isHover && ID == post.id) ? <img
          className="star"
          src="https://user-images.githubusercontent.com/45661217/146631169-54b842c2-d174-488b-9192-02780e57b2a5.png"
        ></img> : null}
      </div>
      <Link to={`postitem/?name=${post.filename}`}>
        <h3>{post.title}</h3>
      </Link>
    </div>
  ));

  const recent_list = recent.map((post) =>
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
    <main>
      <Helmet>
        <title>Dev Log | 영민 블로그</title>
        <meta name="google-site-verification" content="Vfqlx3gjgzF7VwfWKG3BDziWEL76_QpnF4LvF0bgj8I" />
        <meta name="description" content="Dev Log - 고등학교 1학년 재학생이 만든 프로그래밍과 관련된 갖가지 정보들과 에러 해결 방법 등을 모아놓은 블로그입니다." />
      </Helmet>
      <body>
        <Header />
        <div className="fade_in">
          <div className="header">인기있는 블로그</div>
          <div className="container">
            {popular_list}

          </div>
          <div className="header">최근 블로그</div>
          <div className="horizontal_container">
            {recent_list}
          </div>
        </div>
      </body>
      <div className="hide">
        <PostComment />
      </div>
    </main>
  )
}

export default IndexPage;




