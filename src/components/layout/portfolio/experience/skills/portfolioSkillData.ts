/**
 * stack : stack name
 * count : stack count
 * tagColor: tagColor className
 * values : stack values
 */

export type portfolioSkillDataType = {
    stack: string;
    count: number;
    tagColor: string;
    values: string[];
}[];

const portfolioSkillData: portfolioSkillDataType = [
    {
        stack: "server",
        count: 6,
        tagColor: "skill-tag-red",
        values: [
            "Kotlin, Java, Gradle",
            "Spring Mvc, Spring Boot",
            "JPA/Hibernate, MySQL, MariaDB",
            "Nginx, Kubernetes + Docker",
            "Nest.js, TypeScript, Node.js",
            "Amazon EC2, S3, Lightsail",
        ],
    },
    {
        stack: "front",
        count: 3,
        tagColor: "skill-tag-yellow",
        values: [
            "React, TypeScript, Next.js",
            "React-Query, Recoil, Redux",
            "GitHub Actions",
        ],
    },
    {
        stack: "team collaboration tool",
        count: 2,
        tagColor: "skill-tag-blue",
        values: ["Jira software, Slack", "Git, Github"],
    },
];

export default portfolioSkillData;
