export default function User({user}){
    return(
        <div className="box">
            <img className='box-image' src={user.thumbnail}/>
            <h3 className="title">
                {user.title}
            </h3>
            <p className="item">
            {user.stock} item
            </p>
        </div>
    )
} 