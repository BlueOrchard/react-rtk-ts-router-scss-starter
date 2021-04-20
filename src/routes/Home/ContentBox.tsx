import { FC } from "react";

type ContentBoxTypes = {
    title: string,
    content: string
}

const ContentBox: FC<ContentBoxTypes> = ({title, content}) => {
    return(
        <>
            <h1>{title}</h1>
            <p>{content}</p>
        </>
    )
}

export default ContentBox;