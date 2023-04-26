import * as React from "react";
import { Link } from "gatsby";

type postStateType = {
    id: number;
    title: string;
    filename: string;
} | null;

type NearestPostComponentType = {
    nextPost: postStateType;
    previousPost: postStateType;
};

const NearestPostComponent = ({
    nextPost,
    previousPost,
}: NearestPostComponentType) => (
    <div className="nearest-post">
        {nextPost && (
            <div className="nearest-post--next-post">
                다음 블로그:{" "}
                <Link
                    to={`/postitem/?name=${nextPost?.filename}`}
                    key={nextPost?.id}
                >
                    <span>{nextPost?.title}</span>
                </Link>
            </div>
        )}
        {previousPost && (
            <div className="nearest-post--previous-post">
                이전 블로그:{" "}
                <Link
                    to={`/postitem/?name=${previousPost?.filename}`}
                    key={previousPost?.id}
                >
                    <span>{previousPost?.title}</span>
                </Link>
            </div>
        )}
    </div>
);

export default NearestPostComponent;
