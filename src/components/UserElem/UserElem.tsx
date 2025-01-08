interface UserInfo {
    src: string
    name: string
    text: string
    className: string
    alt: string

}  
export const UserElem = ({src, name, text, className, alt}: UserInfo)=>{
    return(
        <div className="UserElem">
            <img src={src} alt= {alt} />
            <div className="user__description">
              <a href="#" className={className}>
                {name}
              </a>
              <p className="secondary__text">{text}</p>
            </div>
          </div>
    )
}