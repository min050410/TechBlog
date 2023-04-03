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
        name: "2022 부산 이스포츠 데이터 분석 전문가 양성 심화 과정 해커톤",
        date: "(2022.12)",
        summary: "2위 - 부산정보산업진흥원, e-sports",
    },
    {
        name: "server",
        date: "(2021.02)",
        summary: "최우수상 - 부산소프트웨어마이스터고",
    },
    {
        name: "server",
        date: "(2021.02)",
        summary: "최우수상 - 부산소프트웨어마이스터고",
    },
];

export default portfolioPrizeData;
