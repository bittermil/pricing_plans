import React from "react";
import classNames from "classnames/bind";
import styles from "./Plan.css";

let cx = classNames.bind(styles);

function Plan(props) {
  let cardColor = cx("plan", {
    lightBlue: props.color === "lightBlue",
    green: props.color === "green",
    red: props.color === "red",
    black: props.color === "black",
    highlighted: props.highlighted,
  });

  return (
    <div className={cardColor}>
      <div className={styles.header}>Безлимитный {props.price}</div>
      <div className={styles.bodyTop}>
        руб <span>{props.price}</span> /мес
      </div>
      <div className={styles.bodyBottom}>
        до <span>{props.speed}</span> Мбит/сек
      </div>
      <div className={styles.footer}>
        Объем включенного трафика не ограничен
      </div>
    </div>
  );
}

export default Plan;
