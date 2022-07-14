import classes from "./Stories.module.css";
import p1 from "../../../images/p1.jpg";
import p3 from "../../../images/p3.jpg";
import p4 from "../../../images/p4.jpg";
import p5 from "../../../images/p5.jpg";

export default function Stories() {
  return (
    <div className={classes.conatiner}>
      <div>
        <div className={classes.authorDiv}>
          <div className={classes.imgContainer}>
            <img src={p1} alt="persons"></img>
          </div>
          <label> by Mushfiq ur Rehman</label>
        </div>
        <h4>How I started out as a paraglider.</h4>
      </div>

      <div>
        <div className={classes.authorDiv}>
          <div className={classes.imgContainer}>
            <img src={p3} alt="persons"></img>
          </div>
          <label>by Daniel Bourke</label>
        </div>
        <h4>My experience in American Alps.</h4>
      </div>

      <div>
        <div className={classes.authorDiv}>
          <div className={classes.imgContainer}>
            <img src={p4} alt="persons"></img>
          </div>
          <label>by Renatto Sanchez</label>
        </div>
        <h4>Switzerland, a bird's eye view.</h4>
      </div>

      <div>
        <div className={classes.authorDiv}>
          <div className={classes.imgContainer}>
            <img src={p5} alt="persons"></img>
          </div>
          <label>by Adriano Ramases</label>
        </div>
        <h4>Careers in aviation in Australia.</h4>
      </div>
    </div>
  );
}
