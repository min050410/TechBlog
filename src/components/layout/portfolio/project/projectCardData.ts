/**
 * id : project index
 * filename : project filename
 * stack : project stack ex) frontend
 * name: project name
 * date project date
 */

export type projectCardsDataType = {
    id: number;
    filename: string;
    stack: string;
    name: string;
    date: {
        month: string;
        year: string;
    };
}[];

const projectCardsData: projectCardsDataType = [
    {
        id: 1,
        filename: "Project-BSSM-Portfolio",
        stack: "backend",
        name: "BSSM-Portfolio",
        date: { month: "MAR", year: "2023" },
    },
    {
        id: 2,
        filename: "Project-Novel-Cloud",
        stack: "backend",
        name: "Novel-Cloud",
        date: { month: "MAR", year: "2023" },
    },
    {
        id: 3,
        filename: "Project-Hearing",
        stack: "backend",
        name: "Hearing",
        date: { month: "JAN", year: "2023" },
    },
    {
        id: 4,
        filename: "Project-RECODE",
        stack: "fullstack",
        name: "RECODE",
        date: { month: "DEC", year: "2022" },
    },
    {
        id: 5,
        filename: "Project-TCP",
        stack: "fullstack",
        name: "TCP",
        date: { month: "DEC", year: "2022" },
    },
    {
        id: 6,
        filename: "Project-TechBlog",
        stack: "frontend, server",
        name: "TechBlog",
        date: { month: "NOV", year: "2021" },
    },
    {
        id: 7,
        filename: "Project-BSMOJ",
        stack: "backend",
        name: "BSMOJ",
        date: { month: "OCT", year: "2022" },
    },
    {
        id: 8,
        filename: "Project-2048",
        stack: "fullstack",
        name: "2048",
        date: { month: "JUN", year: "2022" },
    },
    {
        id: 9,
        filename: "Project-jjap-git",
        stack: "c language",
        name: "jjap-git",
        date: { month: "DEC", year: "2021" },
    },
    {
        id: 10,
        filename: "Project-zolzima",
        stack: "fullstack",
        name: "zolzima",
        date: { month: "DEC", year: "2021" },
    },
    {
        id: 11,
        filename: "Project-notifarm",
        stack: "c language",
        name: "notifarm",
        date: { month: "DEC", year: "2021" },
    },
];

export default projectCardsData;
