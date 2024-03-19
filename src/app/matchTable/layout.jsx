import React from "react";
import styles from "../ui/draw/draw.module.css";

const layout = ({ children }) => {
    return (
        <div className={styles.drawPageContainer}>
            <h1 className={styles.headTitle}>2022-2023赛季 84452韭菜杯</h1>
            <h2 className={styles.headTitle}>2022-2023 Season &nbsp;&nbsp;84452 LEEK CUP</h2>
            {children}
            <div style={{ height: "150px" }}></div>
        </div>
    );
};

export default layout;
