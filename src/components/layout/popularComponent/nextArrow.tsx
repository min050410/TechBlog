import * as React from "react";

type NextArrowPropsType = {
    className?: any;
    style?: any;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NextArrow = ({
    className,
    style,
    onClick
}: NextArrowPropsType) => {
    return (
        <div className={className} style={{ ...style, display: 'block', background: 'red' }} onClick={onClick} />
    )
}

export default NextArrow;




