/**
 * id : blog index
 * title : title of blog
 * filename : blog filename
 * img : blog img filename */

export type popularPostsDataType = {
    id: number;
    title: string;
    filename: string;
    imgLineOne: string;
    imgLineTwo: string;
}[];

const popularPostsData: popularPostsDataType = [
    {
        id: 1,
        title: "개인 블로그를 개발한 이유",
        filename: "Blog",
        imgLineOne: "",
        imgLineTwo: "My Blog",
    },
    {
        id: 2,
        title: "CORS와 해결방법",
        filename: "Cors",
        imgLineOne: "",
        imgLineTwo: "CORS",
    },
    {
        id: 13,
        title: "클린 아키텍처에 대해 알아보자",
        filename: "The-clean-architecture",
        imgLineOne: "Clean",
        imgLineTwo: "Architecture",
    },
    {
        id: 6,
        title: "윈도우 터미널 꾸미기",
        filename: "Ohmyposh",
        imgLineOne: "Oh My",
        imgLineTwo: "Posh",
    },
    {
        id: 15,
        title: "다익스트라 알고리즘",
        filename: "Dijkstra",
        imgLineOne: "",
        imgLineTwo: "Dijkstra",
    },
    {
        id: 20,
        title: "2022년 회고와 앞으로의 목표",
        filename: "Review2022",
        imgLineOne: "2022",
        imgLineTwo: "Review",
    },
    {
        id: 16,
        title: "플로이드 워셜 알고리즘",
        filename: "Floyed-warshell",
        imgLineOne: "Floyed",
        imgLineTwo: "Warshell",
    },
    {
        id: 17,
        title: "KMP 알고리즘",
        filename: "KMP",
        imgLineOne: "",
        imgLineTwo: "KMP",
    },
    {
        id: 18,
        title: "React에서 setInterval의 한계점",
        filename: "useInterval",
        imgLineOne: "React",
        imgLineTwo: "LifeCycle",
    },
    {
        id: 10,
        title: "힙 정렬(heap sort)에 대해 알아보자",
        filename: "Heapsort",
        imgLineOne: "",
        imgLineTwo: "Heap sort",
    },
    {
        id: 22,
        title: "CSRF 공격",
        filename: "Csrf",
        imgLineOne: "",
        imgLineTwo: "CSRF",
    },
    {
        id: 21,
        title: "Gradle을 kotiln dsl로 마이그레이션",
        filename: "Kts",
        imgLineOne: "kts",
        imgLineTwo: "migration",
    },
];

export default popularPostsData;
