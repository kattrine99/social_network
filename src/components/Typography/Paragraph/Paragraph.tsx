interface Paragraph {
    classname: string
    text: string
}
export const Paragraph = ({classname, text}:Paragraph) =>{
return (
    <p className={classname}>{text}</p>
)
}