/**
 * name : prize name
 * date : prize date
 * summary: prize summary
 */

export type portfolioPrizeDataType = {
    name: string;
    date: string;
    summary: string;
}[];

const portfolioPrizeData: portfolioPrizeDataType = [
    {
        name: "2022 교내 동계 해커톤",
        date: "(2022.1)",
        summary: "우수상 - 부산소프트웨어마이스터고",
    },
    {
        name: "2022 부산 이스포츠 데이터 분석 전문가 양성 심화 과정 해커톤",
        date: "(2022.12)",
        summary: "2위 - 부산정보산업진흥원, e-sports",
    },
    {
        name: "2022 하계 스마트시티 해커톤",
        date: "(2022.07)",
        summary: "우수상 - 부산소프트웨어마이스터고",
    },
    {
        name: "NYPC",
        date: "(2022.05)",
        summary: "특별상 - 넥슨",
    },
    {
        name: "제 6회 전국 고등학교 소프트웨어 경진대회",
        date: "(2021.11)",
        summary: "은상 - 카이스트, 과학기술정보통신부",
    },
    {
        name: "2021 4개교 연합 해커톤",
        date: "(2021.11)",
        summary: "인기상 - 과학기술정보통신부",
    },
    {
        name: "2021 하계 전공캠프 해커톤",
        date: "(2021.07)",
        summary: "최우수상 - 부산소프트웨어마이스터고",
    },
];

export default portfolioPrizeData;
