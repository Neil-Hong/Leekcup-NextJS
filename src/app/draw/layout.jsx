import React from "react";
import styles from "../ui/draw/draw.module.css";

const layout = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};

export default layout;
