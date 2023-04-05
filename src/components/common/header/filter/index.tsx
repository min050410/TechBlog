import * as React from "react";

type HeaderComponentType = {
    seletedTag: string;
    notSeletedTags: string[];
    reset: () => void;
    tagClick: (tag: string) => void;
};

const FilterBoxComponent = ({
    seletedTag,
    notSeletedTags,
    reset,
    tagClick,
}: HeaderComponentType) => {
    return (
        <div className="filterBox">
            <div className="left">
                <div className="filterBox-title">적용</div>
                {seletedTag && (
                    <div className="tagBox">
                        <span onClick={reset}>{seletedTag}</span>
                    </div>
                )}
            </div>
            <div className="right">
                <div className="filterBox-title">태그 목록</div>
                <div className="tagBox">
                    {notSeletedTags.map((tag: string) => (
                        <span onClick={() => tagClick(tag)}>{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FilterBoxComponent;
