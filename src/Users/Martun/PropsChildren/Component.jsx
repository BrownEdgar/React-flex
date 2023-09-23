export default function Component({ children }){
    console.log(children);
    return (
        <div>
            {children}
        </div>
    )
}