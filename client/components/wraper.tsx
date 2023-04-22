import React, {ReactNode} from "react";

interface Props {
    children?: ReactNode,
    className?: string
}

const Wrapper: React.FC<Props> = ({ children, className }) => {
    return (
        <div
            className={`w-full max-w-[1280px] px-5 md:px-10 mx-auto ${
                className || ""
            }`}
        >
            {children}
        </div>
    );
};

export default Wrapper;