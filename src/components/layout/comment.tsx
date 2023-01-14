import React, { useRef, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useSearchParam } from '../../hooks';
import { themeColorState } from '../../recoil/theme/theme';

const utterancesSelector = 'iframe.utterances-frame';
const src = 'https://utteranc.es';
const LIGHT_THEME = 'github-light';
const DARK_THEME = 'dark-blue';

type PostCommentProps = {
    filename?: string | null | undefined;
}

const PostComment = ({
    filename
}: PostCommentProps) => {

    const ref = useRef<HTMLDivElement>(null);
    const postItem = useSearchParam("name");

    const theme = useRecoilValue(themeColorState);
    const themeMode = theme === 'light' ? LIGHT_THEME : DARK_THEME;

    useEffect(() => {
        const createUtterancesEl = () => {
            const utterances = document.createElement('script');
            const utterancesSettings = {
                src: 'https://utteranc.es/client.js',
                repo: 'min050410/TechBlog',
                'issue-term': `Comment: ${filename ?? "init"}`,
                label: 'utterances',
                theme: themeMode,
                crossorigin: 'anonymous',
                async: 'false',
            };
            Object.entries(utterancesSettings).forEach(([key, value]) => {
                utterances.setAttribute(key, value);
            });
            ref.current?.appendChild(utterances);
        }

        const postThemeMessage = () => {
            const message = {
                type: 'set-theme',
                theme: themeMode,
            };
            utterancesEl?.contentWindow?.postMessage(message, src);
        };

        const utterancesEl = ref.current?.querySelector<HTMLIFrameElement>(utterancesSelector);
        utterancesEl ? postThemeMessage() : createUtterancesEl();

    }, [postItem, themeMode]);
    return <div ref={ref}></div>;
};

export default PostComment;