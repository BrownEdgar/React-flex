export default function User({user}){
    return(
        <div className="box">
            <img className='box-image' src={user.thumbnail}/>
            <a href='https://dummyjson.com/'className="title">
                {user.title}
            </a>
            <p className="item">
            {user.stock} item
            </p>
        </div>
     )
}