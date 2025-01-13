import { Link } from "react-router-dom"
interface ApplinkProps {
    to: string
    text: string
    className: string
}
export const Applink = ({ to, text, className }: ApplinkProps) => {
    return (
        <Link to={to} className={className}>
      {text}
    </Link>
    )
}
