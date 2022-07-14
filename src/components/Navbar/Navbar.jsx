import classes from "./Navbar.module.css";
import { useState } from "react";
import { bar1, bar2, bar3, barStyle, sidebar1, sidebar2 } from "./styles";

export default function Navbar() {
  const [styleState, setStyleState] = useState(true);

  return (
    <nav>
      <div
        className={classes.menu_icons_div}
        onClick={() => setStyleState(!styleState)}
      >
        <div style={styleState ? barStyle : bar1}></div>
        <div style={styleState ? barStyle : bar2}></div>
        <div style={styleState ? barStyle : bar3}></div>
      </div>
      <div style={styleState ? sidebar1 : sidebar2}>
        <div className={classes.sidebarInnerDiv}>
          <div>
            <h3>Home</h3>
          </div>
          <div>
            <h3>New Pilots</h3>
          </div>
          <div>
            <h3>Visiting Pilots</h3>
          </div>
          <div>
            <h3>Flying Sites</h3>
          </div>
          <div>
            <h3>Weather</h3>
          </div>
          <div>
            <h3>Membership</h3>
          </div>
          <div>
            <h3>Forum</h3>
          </div>
        </div>
      </div>
      <div className={classes.nav_links}>
        <ul>
          <li>Home</li>
          <li>New Pilots</li>
          <li>Visiting Pilots</li>
          <li>Flying Sites</li>
          <li>Weather</li>
          <li>Membership</li>
          <li>Forum</li>
          <li className={classes.arr}>
            More <i class={`${classes.arrow} ${classes.down}`}></i>
            <div className={classes.moreDiv}>
              <div>
                <h4>XC</h4>
              </div>
              <div>
                <h4>Licenses</h4>
              </div>
              <div>
                <h4>Gallery</h4>
              </div>
              <div>
                <h4>Events</h4>
              </div>
              <div>
                <h4>Partners</h4>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <h1>Sevta Paragliding Club</h1>
    </nav>
  );
}
