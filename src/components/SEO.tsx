import * as React from "react"
import { Helmet } from 'react-helmet'

type Props = {
    title: string;
}

const SEO: React.FC<Props> = (props: Props) => {

    return (
        <Helmet>
            <title>{props.title}</title>
            <meta name="google-site-verification" content="Vfqlx3gjgzF7VwfWKG3BDziWEL76_QpnF4LvF0bgj8I" />
            <meta name="description" content="Dev Log - 고등학교 1학년 재학생이 만든 프로그래밍과 관련된 갖가지 정보들과 에러 해결 방법 등을 모아놓은 블로그입니다." />
        </Helmet>
    )
}
export default SEO;