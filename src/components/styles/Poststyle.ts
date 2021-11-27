import { css } from 'styled-components'

const PostStyle = css`
font-size: 1.125rem;
h1,h2,h3,h4,h5 
{
  font-weight: bold;
}
h1 {
  font-size: 2.5rem;
  margin: 3.5rem 0px 10px 0px;
}
h2 {
  font-size: 2.25rem;
  margin: 3rem 0px 8px 0px;
}
h3 {
  font-size: 2rem;
  margin: 2.5rem 0px 6px 0px;
}
h4 {
  font-size: 1.75rem;
  margin: 2rem 0px;
}
h5 {
  font-size: 1.5rem;
  margin: 1.5rem 0px 2px 0px;
}
p {
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin: 24px 0px;
}
p,
  li {
    color: #444444;
}
blockquote {
  margin: 24px 0px;
  padding: 4px 24px;
  border-left: 5px solid #747474;
}
blockquote p {
  margin: 4px 0px;
  color: #747474;
}
code,
  pre * {
    font-size: 1rem;
    font-family: 'IBM Plex Mono', monospace;
  }
pre {
  box-sizing: border-box;
  background-color: #f8f8f8;
  padding: 16px;
  margin: 12px 0px;
  width: 100%;
  border-radius: 8px;
  overflow: auto;
}
ol,
  ul {
    list-style: none;
    margin: 16px 0px;
    li {
      width: calc(100% - 28px);
      margin: 8px 0px;
      left: 28px;
      position: relative;
      &:before {
        position: absolute;
        content: '•';
        font-size: 1.75rem;
        color: #d9d9d9;
        left: -36px;
        top: -6px;
      }
    }
    ul {
      padding-left: 32px;
      margin: 4px 0px;
    }
  }
  const device = {
    tablet: '(max-width: 1280px)',
    mobile: '(max-width: 768px)',
  };
  
  const inner = {
    desktop: '1200px',
    tablet: '750px',
    mobile: '95%',
  };
`;

export default PostStyle;