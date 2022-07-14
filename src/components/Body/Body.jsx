import classes from "./Body.module.css";
import Card from "./Card";
import Aside from "./Aside/Aside";
import p1 from "../../images/p1.jpg";
import p3 from "../../images/p3.jpg";
import p4 from "../../images/p4.jpg";
import p5 from "../../images/p5.jpg";

export default function Body() {
  return (
    <body className={classes.body}>
      <section className={classes.section}>
        <div className={classes.Recommended}>Recommended</div>
        <Card
          author="Hamdullah"
          source={p1}
          title="Our history"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          nemo itaque labore tempore obcaecati, nobis est dolorem soluta sint
          quas illo totam, ipsum, doloremque sit sapiente odio. Sequi, ipsum
          natus."
          date="Nov 12, 2021"
          readTime="5 mins read"
          selection="Selected for you"
        ></Card>
        <Card
          author="Farhan"
          source={p4}
          title="About Founders"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          nemo itaque labore tempore obcaecati, nobis est dolorem soluta sint
          quas illo totam, ipsum, doloremque sit sapiente odio. Sequi, ipsum
          natus."
          date="Nov 12, 2021"
          readTime="12 mins read"
          selection="Recommended"
        ></Card>
        <Card
          author="Ramesh"
          source={p3}
          title="Aces"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          nemo itaque labore tempore obcaecati, nobis est dolorem soluta sint
          quas illo totam, ipsum, doloremque sit sapiente odio. Sequi, ipsum
          natus."
          date="Jan 21, 2020"
          readTime="3 mins read"
          selection="Selected for you"
        ></Card>
        <Card
          author="Jared"
          source={p4}
          title="Our history"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          nemo itaque labore tempore obcaecati, nobis est dolorem soluta sint
          quas illo totam, ipsum, doloremque sit sapiente odio. Sequi, ipsum
          natus."
          date="Nov 12, 2021"
          readTime="5 mins read"
          selection="Selected for you"
        ></Card>
        <Card
          author="Natasha"
          source={p5}
          title="About Founders"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          nemo itaque labore tempore obcaecati, nobis est dolorem soluta sint
          quas illo totam, ipsum, doloremque sit sapiente odio. Sequi, ipsum
          natus."
          date="Nov 12, 2021"
          readTime="12 mins read"
          selection="Recommended"
        ></Card>
        <Card
          author="David"
          source={p1}
          title="Aces"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          nemo itaque labore tempore obcaecati, nobis est dolorem soluta sint
          quas illo totam, ipsum, doloremque sit sapiente odio. Sequi, ipsum
          natus."
          date="Jan 21, 2020"
          readTime="3 mins read"
          selection="Selected for you"
        ></Card>
        <Card
          author="Natasha"
          source={p5}
          title="About Founders"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          nemo itaque labore tempore obcaecati, nobis est dolorem soluta sint
          quas illo totam, ipsum, doloremque sit sapiente odio. Sequi, ipsum
          natus."
          date="Nov 12, 2021"
          readTime="12 mins read"
          selection="Recommended"
        ></Card>
      </section>
      <Aside />
    </body>
  );
}
