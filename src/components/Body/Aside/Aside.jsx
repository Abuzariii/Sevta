import classes from "./Aside.module.css";
import Stories from "./Stories";
import Founders from "./Founders";
import AsideEnd from "./AsideEnd";

export default function Aside() {
  return (
    <aside className={classes.aside}>
      <div className={classes.access}>Get unlimited access</div>
      <div className={classes.container}>
        <form>
          <input type="search" placeholder="Search..." />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className={classes.whatDiv}>
        <li>
          <span>What are we doing today</span>
        </li>
      </div>
      <Stories />
      <div className={classes.write}>
        <h4>Write on Sky High Blog:</h4>
        <p>1. New Writer's FAQs.</p>
        <p>2. What's new today?</p>
        <p>3. Give us Feedback</p>
      </div>
      <div className={classes.hr}></div>

      <div className={classes.recommendations}>
        <h4>Recommended Topics: </h4>
        <div className={classes.r2}>
          <div>
            <div className={classes.rs}>Aviation Photography</div>
            <div className={classes.rs}>Paragliders</div>
            <div className={classes.rs}>Careers</div>
          </div>
          <div>
            <div className={classes.rs}>Courses</div>
            <div className={classes.rs}>Flight Durations</div>
            <div className={classes.rs}>Avionics</div>
          </div>
        </div>
      </div>

      <Founders />
      <AsideEnd />
    </aside>
  );
}
