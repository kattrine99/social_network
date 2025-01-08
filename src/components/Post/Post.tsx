import {PostImg} from "./data"

export const Post = () =>{
    return (  
        <div className="media-container">
            {PostImg.map((item, index)=>{
                return(
                    <img
                    key={index}
                    className = "media__item"
                    src = {item.src}
                    alt="Post Item"
                    />
                )
            })}
          </div>
    )
}