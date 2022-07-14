import classes from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={classes.main}>
      <div className={classes.imageDiv}>
        <img alt="author" src={props.source} />
        <a href="##">{props.author}</a>
      </div>
      <label>{props.title}</label>
      <p>{props.content}</p>
      <div>
        <ul>
          <li className={classes.date}>{props.date}</li>
          <li>{props.readTime}</li>
          <li>{props.selection}</li>
        </ul>
      </div>
    </div>
  );
}
