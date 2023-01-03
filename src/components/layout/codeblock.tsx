import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { themeColorState } from '../../recoil/theme/theme';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import darkTheme from 'prism-react-renderer/themes/oceanicNext';
import lightTheme from 'prism-react-renderer/themes/github'

const Pre = styled.pre`
    text-align: left;
    margin: 1em 0;
    padding: 1em 2.5em 0.5em 0.5em;
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
    padding: .15em;
`;

type CodeBlockType = {
    children: string,
    className: string | undefined
};

//code highlight
const CodeBlock = ({ children, className }: CodeBlockType) => {

    const theme = useRecoilValue(themeColorState);
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    if (className) {
        const language: Language = className.replace(/language-/, '') as Language;
        return (
            <Highlight {...defaultProps} theme={themeMode} code={children} language={language}>
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <Pre className={className} style={style}>
                        {tokens.map((line, i) => (
                            <Line key={i} {...getLineProps({ line, key: i })}>
                                {tokens[i + 1] ? <LineNo>{i + 1}</LineNo> : null}
                                {tokens[i + 1] ? <LineContent>
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
