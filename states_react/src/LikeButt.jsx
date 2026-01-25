import { useState } from "react";
function LikeButt() {
    let toggleLike = () => {
        console.log("toggleLike")
        let newValue = !isLiked;
        console.log(newValue);
        { newValue ? setlikes(likes + 1) : setlikes(likes); }
        setisLiked(newValue);
    }
    let [isLiked, setisLiked] = useState(false);
    let [likes, setlikes] = useState(0);
    function countLikes() {
    }
    let likeStyle = {
        color: "red"
    }
    return (
        <div>
            <p onClick={toggleLike}>
                {
                    isLiked ? <i style={likeStyle} className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>
                }

            </p>
            <p>{likes}</p>
        </div>
    )
}

export default LikeButt;