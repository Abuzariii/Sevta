import classes from "./AsideEnd.module.css";

export default function AsideEnd() {
  return (
    <div className={classes.main}>
      <div className={classes.saved}>
        <h5>Recently Saved</h5>
        <p>History of commercial paragliding in Australia.</p>
        <label>Feb 4 . 3 mins read</label>
        <a href="##">See all(2)</a>
      </div>

      <div className={classes.footer}>
        <div>
          <label>Help</label>
          <label>Status</label>
          <label>Blog</label>
          <label>Aces</label>
          <label>Careers</label>
        </div>
        <div>
          <label>Privacy</label>
          <label>Terms</label>
          <label>About</label>
          <label>Knowable</label>
        </div>
      </div>
    </div>
  );
}
