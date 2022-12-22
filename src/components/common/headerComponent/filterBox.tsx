import * as React from "react";
import { Link } from "gatsby";

// style
import '../../../styles/header.sass';

type HeaderComponentType = {
    seletedTag: string,
    notSeletedTags: string[],
    reset: () => void,
    tagClick: (tag: string) => void
}

const FilterBoxComponent = ({
    seletedTag,
    reset,
    notSeletedTags,
    tagClick
}: HeaderComponentType) => {
    
    return (
        <div className="filterBox">
            <div className="left">
                <div>적용</div>
                {seletedTag &&
                    <Link to={`/`}>
                        <span onClick={reset}>
                            {seletedTag}
                        </span>
                    </Link>
                }
            </div>
            <div className="right">
                <div>태그 목록</div>
                {notSeletedTags.map((tag: string) => (
                    <Link to={`/?f=${tag}`}>
                        <span onClick={() => tagClick(tag)}>{tag}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default FilterBoxComponent;