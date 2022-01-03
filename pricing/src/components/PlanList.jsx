import React from "react";
import Plan from "./Plan";
import styles from "./PlanList.css";

function PlanList() {
  return (
    <div className={styles.planList}>
      <React.Fragment>
        <Plan color={"lightBlue"} price={300} speed={10}></Plan>
        <Plan color={"green"} price={450} speed={50}></Plan>
        <Plan color={"red"} price={550} speed={100}></Plan>
        <Plan color={"black"} price={1000} speed={1000}></Plan>
      </React.Fragment>
    </div>
  );
}

export default PlanList;
