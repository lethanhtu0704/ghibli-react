import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const LineSkeleton = () => {
    return (
        <div className="row justify-content-center">
            {Array(33)
                .fill()
                .map((item, index) => (
                    <SkeletonTheme baseColor="#cbcbcb" highlightColor="#ececec">
                        <li align="center" className="col-sm-4 col-md-3 col-xl-4 mb-4">
                            <Skeleton width={170} />
                        </li>
                    </SkeletonTheme>
                ))}
        </div>
    );
};
export default LineSkeleton;