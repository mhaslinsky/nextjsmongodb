import { Fragment } from "react";
import classes from "./MeetupDetail.module.scss";

function MeetupDetail({ image, title, address, description }) {
  return (
    <section className={classes.details}>
      <img src={image} alt='meetup image' />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
}

export default MeetupDetail;
