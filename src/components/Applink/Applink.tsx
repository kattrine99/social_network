interface ApplinkProps {
    href: string
    text: string
    className: string
}
export const Applink = ({ href, text, className }: ApplinkProps) => {
    return (
        <a className={className} href={href}>{text}</a>
    )
}
