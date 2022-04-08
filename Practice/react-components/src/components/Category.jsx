import "./category.css";

let Category = (props) => {
   return (
      <div className="category">
         <img src={props.image} alt="" />
         <b>{props.title}</b>
      </div>
   )
}

export { Category };