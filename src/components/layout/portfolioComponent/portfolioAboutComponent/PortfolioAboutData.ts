/**
 * header : introduce header
 * line1 : paragraph line1
 * line2 : paragraph line2
 * line3 : paragraph line3
 */

export type portfolioAboutDataType = {
    header: string;
    line1: string;
    line2: string;
    line3: string;
};

const portfolioAboutData: portfolioAboutDataType = {
    header: "👋 안녕하세요 김영민입니다.",
    line1: "현재 부산소프트웨어마이스터고에 재학 중인 학생입니다.",
    line2: "코드를 작성할 때 고민하며 사용자와 개발팀에게 최고의 가치를 전달할 수 있도록 노력합니다.",
    line3: "웹 풀스택 개발자이지만 서버쪽에 관심이 있으며, 다양한 프로젝트를 개발하였습니다.",
};

export default portfolioAboutData;
