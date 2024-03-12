import React from "react";
import styles from "../ui/entrance/entrance.module.css";

const layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <h1>2022-2023赛季 84452韭菜杯抽签仪式</h1>
            <h2>2022-2023 Season &nbsp;&nbsp;84452 LEEK CUP DRAW CEREMONY</h2>
            <div className={styles.title}>
                <div></div>
                <div>
                    <h1>赛事回顾</h1>
                    <h2>Leek Cup Review</h2>
                </div>
                <div>
                    <h3>
                        数据&视频来源: 鱼吧用户M1Nmin <br />
                        若侵删
                    </h3>
                    <h3>Source: https://yuba.douyu.com/p/495607051644161807 </h3>
                </div>
            </div>
            {children}
        </div>
    );
};

export default layout;
