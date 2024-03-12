"use client";
import React, { useState } from "react";
import styles from "../ui/entrance/entrance.module.css";
import VideoJS from "../utils/video";

const Entrance = () => {
    const [flag, setFlag] = useState(false);
    const videoJsOptions = {
        autoplay: "any",
        controls: true,
        preload: "auto",
        responsive: true,
        width: 900,

        sources: [
            {
                src: "/reviewVideo.mp4",
                type: "video/mp4",
            },
        ],
    };
    const handleReview = () => {
        setFlag(!flag);
    };
    return (
        <div className={styles.container}>
            <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                <VideoJS options={videoJsOptions}></VideoJS>
            </div>
            <div className={styles.staticsContainer}>
                <a className={styles.button} href="/draw">
                    开始抽签
                    <br />
                    Start
                </a>
                <a className={styles.button} href="/stats">
                    技术统计
                    <br />
                    Stats
                </a>
                <button className={styles.button} onClick={handleReview}>
                    赛事回顾
                    <br />
                    Match Review
                </button>
            </div>
        </div>
    );
};

export default Entrance;
