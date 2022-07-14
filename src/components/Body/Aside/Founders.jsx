import classes from "./Founders.module.css";
import p1 from "../../../images/p1.jpg";
import p3 from "../../../images/p3.jpg";
import p4 from "../../../images/p4.jpg";
import p5 from "../../../images/p5.jpg";

export default function Founders() {
  return (
    <div className={classes.main}>
      <h2>Our Founders : </h2>
      <div className={classes.founders}>
        <div className={classes.imgContainer}>
          <img src={p5} alt="persons"></img>
        </div>
        <div className={classes.about}>
          <h3>Roxana mcKanzie</h3>
          <label>Freelance Journalist</label>
          <p>University of Michigan</p>
        </div>
        <button>Follow</button>
      </div>

      <div className={classes.founders}>
        <div className={classes.imgContainer}>
          <img src={p1} alt="persons"></img>
        </div>
        <div className={classes.about}>
          <h3>Roxana mcKanzie</h3>
          <label>Freelance Journalist</label>
          <p>University of Michigan</p>
        </div>
        <button>Follow</button>
      </div>

      <div className={classes.founders}>
        <div className={classes.imgContainer}>
          <img src={p3} alt="persons"></img>
        </div>
        <div className={classes.about}>
          <h3>Roxana mcKanzie</h3>
          <label>Freelance Journalist</label>
          <p>University of Michigan</p>
        </div>
        <button>Follow</button>
      </div>

      <div className={classes.founders}>
        <div className={classes.imgContainer}>
          <img src={p4} alt="persons"></img>
        </div>
        <div className={classes.about}>
          <h3>Roxana mcKanzie</h3>
          <label>Freelance Journalist</label>
          <p>University of Michigan</p>
        </div>
        <button>Follow</button>
      </div>
    </div>
  );
}
