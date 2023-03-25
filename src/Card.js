import "./Card.css"
function Card(props) {
return(
  <card className = "Card">
  <img src={props.image} alt =""/>
  <a className="Link" href ={props.textUrl}>{props.children}</a>
  </card>
);
}
export default Card;
