import "./props.css"
function Card(props){
    return <div className="child">
        <img src={props.image}/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
}
export default Card