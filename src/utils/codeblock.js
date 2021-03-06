import React from 'react'
import styled from 'styled-components'
import Highlight, {defaultProps} from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/oceanicNext';

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.8em 0.5em 0.5em 0.5em;
  display: inline-block;  
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;

//code highlight
const CodeBlock = ({children, className}) => {
  if(className) {
    const language = className.replace(/language-/, '')
    
    return (  
      <Highlight {...defaultProps} theme={theme} code={children} language={language}>
        {({className, style, tokens, getLineProps, getTokenProps}) => (
          <Pre className={className} style={style} width="auto">
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              {tokens[i+1] ? <LineNo>{i + 1}</LineNo> : null}
              {tokens[i+1] ? <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent> : null}
            </Line>
          ))}
        </Pre>
        )}
      </Highlight>
    )
  }
  return null
}

export default CodeBlock;
