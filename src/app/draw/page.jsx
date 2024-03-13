"use client";
import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import styles from "../ui/draw/draw.module.css";
import AC from "../ui/assets/images/AC.png";
import Barcelona from "../ui/assets/images/Barcelona.png";
import Chelasea from "../ui/assets/images/Chelsea.png";
import MC from "../ui/assets/images/MC.png";
import Liverpool from "../ui/assets/images/Liverpool.png";
import PSG from "../ui/assets/images/PSG.png";
import CP from "../ui/assets/images/CP.png";
import RealMadrid from "../ui/assets/images/RealMadrid.png";
import Arsenal from "../ui/assets/images/Arsenal.png";
import SB29 from "../ui/assets/images/SB29.png";
import Villarreal from "../ui/assets/images/Villarreal_CF.png";
import Bayern from "../ui/assets/images/Bayern.png";
import MU from "../ui/assets/images/MU.png";
import Sunderland from "../ui/assets/images/Sunderland.png";
import InterMilan from "../ui/assets/images/InterMilan.png";
import NewCastel from "../ui/assets/images/Newcastle.png";
import Wolverhampton from "../ui/assets/images/Wolverhampton.png";
import Lazio from "../ui/assets/images/Lazio.png";
import Aston_Villa from "../ui/assets/images/Aston_Villa.png";
import Southampton from "../ui/assets/images/Southampton.png";
import Brighton from "../ui/assets/images/Brighton.png";
import Brugge from "../ui/assets/images/Club_Brugge.png";
import Frankfurt from "../ui/assets/images/Frankfurt.png";
import Birmingham from "../ui/assets/images/Birmingham.png";
import Image from "next/image";
import VideoJS from "../utils/video";

const Page = () => {
    const teams = {
        1: { name: "A.C. Milan", img: AC },
        2: { name: "Manchester City F.C.", img: MC },
        3: { name: "Chelsea F.C.", img: Chelasea },
        4: { name: "Paris Saint-Germain F.C.", img: PSG },
        5: { name: "FC Barcelona", img: Barcelona },
        6: { name: "Liverpool F.C.", img: Liverpool },
        7: { name: "Crystal Palace F.C.", img: CP },
        8: { name: "Sunderland A.F.C.", img: Sunderland },
        9: { name: "Manchester United F.C.", img: MU },
        10: { name: "FC Bayern Munich", img: Bayern },
        11: { name: "Real Madrid CF", img: RealMadrid },
        12: { name: "Arsenal F.C.", img: Arsenal },
        13: { name: "Birmingham City F.C.", img: Birmingham },
        14: { name: "Eintracht Frankfurt", img: Frankfurt },
        15: { name: "Stade Brestois 29", img: SB29 },
        16: { name: "Villarreal CF", img: Villarreal },
        17: { name: "Inter Milan", img: InterMilan },
        18: { name: "Newcastle United", img: NewCastel },
        19: { name: "Wolverhampton Wanderers F.C.", img: Wolverhampton },
        20: { name: "S.S. Lazio", img: Lazio },
        21: { name: "Aston Villa F.C.", img: Aston_Villa },
        22: { name: "Southampton F.C.", img: Southampton },
        23: { name: "Brighton & Hove Albion F.C.", img: Brighton },
        24: { name: "Club Brugge KV", img: Brugge },
    };
    const [randomArr, setRandomArr] = useState([]);
    const [count, setCount] = useState(1);
    const [arr, setArr] = useState([]);
    const [flag, setFlag] = useState(true);
    const videoJsOptions = {
        autoplay: "any",
        controls: true,
        preload: "auto",
        responsive: true,
        width: 900,

        sources: [
            {
                src: "/drawVideo.mp4",
                type: "video/mp4",
            },
        ],
    };

    const rangeRam = function (range, count) {
        const ramArr = [];
        const result = [];

        for (let i = range[0]; i <= range[1]; i++) {
            ramArr.push(i);
        }

        for (; count > 0; count--) {
            const ram = Math.floor(Math.random() * (ramArr.length - 1));

            result.push(ramArr[ram]);

            ramArr[ram] = ramArr[ramArr.length - 1];
            ramArr.pop();
        }

        return result;
    };
    const handleDraw = () => {
        setCount(count + 1);
        console.log(count);
        setArr([...arr, count]);
        if (arr) {
            setTimeout(() => {
                setFlag(false);
            }, 5000);
        }
        for (let i = 2; i < 26; i++) {
            if (count === i) {
                var selectedElement = document.querySelector(`.info${i - 1}`);
                selectedElement.classList.add(`${styles.whiteBackground}`);
                setTimeout(() => {
                    selectedElement.classList.remove(`${styles.whiteBackground}`);
                }, 2000);
            }
        }
    };

    const handleReset = () => {
        setCount(1);
        setArr([]);
        const newRandom = rangeRam([1, 24], 24);
        setRandomArr(newRandom);
        setFlag(true);
    };

    useEffect(() => {
        const getArr = async () => {
            const test = await rangeRam([1, 24], 24);
            setRandomArr(test);
        };
        getArr();
    }, []);
    return (
        <div>
            <ReactAudioPlayer src={"/theme.mp3"} autoPlay loop={true} volume={0.3} />
            <div style={{ display: "flex", flexDirection: "row" }}>
                {" "}
                <button className={styles.drawButton} onClick={handleDraw}>
                    抽签
                    <br /> Draw
                </button>
                {arr[0] === 1 ? flag ? <VideoJS options={videoJsOptions}></VideoJS> : null : null}
                <button className={styles.drawButton} onClick={handleReset}>
                    重新抽签
                    <br /> Redraw
                </button>
            </div>
            <div className={styles.matchTable}>
                <div className={styles.matchTable1}>
                    <div className={`${styles.matchTable1Info} info1`}>
                        <div>
                            {arr.includes(2) ? (
                                randomArr[0] ? (
                                    <Image className={styles.tableImg} src={teams[randomArr[0]].img} alt="logo" />
                                ) : null
                            ) : null}
                        </div>
                        <div>{arr.includes(2) ? (randomArr[0] ? teams[randomArr[0]].name : null) : null}</div>
                    </div>
                    <div>vs</div>
                    <div className={`${styles.matchTable1Info} info2`}>
                        <div>
                            {arr.includes(3) ? (
                                randomArr[1] ? (
                                    <Image className={styles.tableImg} src={teams[randomArr[1]].img} alt="logo" />
                                ) : null
                            ) : null}
                        </div>
                        <div>{arr.includes(3) ? (randomArr[1] ? teams[randomArr[1]].name : null) : null}</div>
                    </div>
                </div>
                <div className={styles.matchTable1}>
                    <div className={`${styles.matchTable1Info} info3`}>
                        <div>
                            {arr.includes(4) ? (
                                randomArr[2] ? (
                                    <Image className={styles.tableImg} src={teams[randomArr[2]].img} alt="logo" />
                                ) : null
                            ) : null}
                        </div>
                        <div>{arr.includes(4) ? (randomArr[2] ? teams[randomArr[2]].name : null) : null}</div>
                    </div>
                    <div>vs</div>
                    <div className={`${styles.matchTable1Info} info4`}>
                        <div>
                            {arr.includes(5) ? (
                                randomArr[3] ? (
                                    <Image className={styles.tableImg} src={teams[randomArr[3]].img} alt="logo" />
                                ) : null
                            ) : null}
                        </div>
                        <div>{arr.includes(5) ? (randomArr[3] ? teams[randomArr[3]].name : null) : null}</div>
                    </div>
                </div>
                <div className={styles.matchTable1}>
                    <div className={`${styles.matchTable1Info} info5`}>
                        <div>
                            {arr.includes(6) ? (
                                randomArr[4] ? (
                                    <Image className={styles.tableImg} src={teams[randomArr[4]].img} alt="logo" />
                                ) : null
                            ) : null}
                        </div>
                        <div>{arr.includes(6) ? (randomArr[4] ? teams[randomArr[4]].name : null) : null}</div>
                    </div>
                    <div>vs</div>
                    <div className={`${styles.matchTable1Info} info6`}>
                        <div>
                            {arr.includes(7) ? (
                                randomArr[5] ? (
                                    <Image className={styles.tableImg} src={teams[randomArr[5]].img} alt="logo" />
                                ) : null
                            ) : null}
                        </div>
                        <div>{arr.includes(7) ? (randomArr[5] ? teams[randomArr[5]].name : null) : null}</div>
                    </div>
                </div>
                <div className={styles.matchTable1}>
                    <div className={`${styles.matchTable1Info} info7`}>
                        <div>
                            {arr.includes(8) ? (
                                randomArr[6] ? (
                                    <Image className={styles.tableImg} src={teams[randomArr[6]].img} alt="logo" />
                                ) : null
                            ) : null}
                        </div>
                        <div>{arr.includes(8) ? (randomArr[6] ? teams[randomArr[6]].name : null) : null}</div>
                    </div>
                    <div>vs</div>
                    <div className={`${styles.matchTable1Info} info8`}>
                        <div>
                            {arr.includes(9) ? (
                                randomArr[7] ? (
                                    <Image className={styles.tableImg} src={teams[randomArr[7]].img} alt="logo" />
                                ) : null
                            ) : null}
                        </div>
                        <div>{arr.includes(9) ? (randomArr[7] ? teams[randomArr[7]].name : null) : null}</div>
                    </div>
                </div>
                <div className={styles.matchTable1}>
                    <div className={`${styles.matchTable1Info} info9`}>
                        <div>
                            {arr.includes(10) ? (
                                randomArr[8] ? (
                                    <Image className={styles.tableImg} src={teams[randomArr[8]].img} alt="logo" />
                                ) : null
                            ) : null}
                        </div>
                        <div>{arr.includes(10) ? (randomArr[8] ? teams[randomArr[8]].name : null) : null}</div>
                    </div>
                    <div>vs</div>
                    <div className={`${styles.matchTable1Info} info10`}>
                        <div>
                            {arr.includes(11) ? (
                                randomArr[9] ? (
                                    <Image className={styles.tableImg} src={teams[randomArr[9]].img} alt="logo" />
                                ) : null
                            ) : null}
                        </div>
                        <div>{arr.includes(11) ? (randomArr[9] ? teams[randomArr[9]].name : null) : null}</div>
                    </div>
                </div>
                <div className={styles.matchTable1}>
                    <div className={`${styles.matchTable1Info} info11`}>
                        <div>
                            {arr.includes(12) ? (
                                randomArr[10] ? (
                                    <Image className={styles.tableImg} src={teams[randomArr[10]].img} alt="logo" />
                                ) : null
                            ) : null}
                        </div>
                        <div>{arr.includes(12) ? (randomArr[10] ? teams[randomArr[10]].name : null) : null}</div>
                    </div>
                    <div>vs</div>
                    <div className={`${styles.matchTable1Info} info12`}>
                        <div>
                            {arr.includes(13) ? (
                                randomArr[11] ? (
                                    <Image className={styles.tableImg} src={teams[randomArr[11]].img} alt="logo" />
                                ) : null
                            ) : null}
                        </div>
                        <div>{arr.includes(13) ? (randomArr[11] ? teams[randomArr[11]].name : null) : null}</div>
                    </div>
                </div>
                <div className={styles.matchTable1}>
                    <div className={`${styles.matchTable1Info} info13`}>
                        <div>
                            {arr.includes(14) ? (
                                randomArr[12] ? (
                                    <Image className={styles.tableImg} src={teams[randomArr[12]].img} alt="logo" />
                                ) : null
                            ) : null}
                        </div>
                        <div>{arr.includes(14) ? (randomArr[12] ? teams[randomArr[12]].name : null) : null}</div>
                    </div>
                    <div>vs</div>
                    <div className={`${styles.matchTable1Info} info14`}>
                        <div>
                            {arr.includes(15) ? (
                                randomArr[13] ? (
                                    <Image className={styles.tableImg} src={teams[randomArr[13]].img} alt="logo" />
                                ) : null
                            ) : null}
                        </div>
                        <div>{arr.includes(15) ? (randomArr[13] ? teams[randomArr[13]].name : null) : null}</div>
                    </div>
                </div>
                <div className={styles.matchTable1}>
                    <div className={`${styles.matchTable1Info} info15`}>
                        <div>
                            {arr.includes(16) ? (
                                randomArr[14] ? (
                                    <Image className={styles.tableImg} src={teams[randomArr[14]].img} alt="logo" />
                                ) : null
                            ) : null}
                        </div>
                        <div>{arr.includes(16) ? (randomArr[14] ? teams[randomArr[14]].name : null) : null}</div>
                    </div>
                    <div>vs</div>
                    <div className={`${styles.matchTable1Info} info16`}>
                        <div>
                            {arr.includes(17) ? (
                                randomArr[15] ? (
                                    <Image className={styles.tableImg} src={teams[randomArr[15]].img} alt="logo" />
                                ) : null
                            ) : null}
                        </div>
                        <div>{arr.includes(17) ? (randomArr[15] ? teams[randomArr[15]].name : null) : null}</div>
                    </div>
                </div>
                <div className={styles.matchTable1}>
                    <div className={`${styles.matchTable1Info} info17`}>
                        <div>
                            {arr.includes(18) ? (
                                randomArr[16] ? (
                                    <Image className={styles.tableImg} src={teams[randomArr[16]].img} alt="logo" />
                                ) : null
                            ) : null}
                        </div>
                        <div>{arr.includes(18) ? (randomArr[16] ? teams[randomArr[16]].name : null) : null}</div>
                    </div>
                    <div>vs</div>
                    <div className={`${styles.matchTable1Info} info18`}>
                        <div>
                            {arr.includes(19) ? (
                                randomArr[17] ? (
                                    <Image className={styles.tableImg} src={teams[randomArr[17]].img} alt="logo" />
                                ) : null
                            ) : null}
                        </div>
                        <div>{arr.includes(19) ? (randomArr[17] ? teams[randomArr[17]].name : null) : null}</div>
                    </div>
                </div>
                <div className={styles.matchTable1}>
                    <div className={`${styles.matchTable1Info} info19`}>
                        <div>
                            {arr.includes(20) ? (
                                randomArr[18] ? (
                                    <Image className={styles.tableImg} src={teams[randomArr[18]].img} alt="logo" />
                                ) : null
                            ) : null}
                        </div>
                        <div>{arr.includes(20) ? (randomArr[18] ? teams[randomArr[18]].name : null) : null}</div>
                    </div>
                    <div>vs</div>
                    <div className={`${styles.matchTable1Info} info20`}>
                        <div>
                            {arr.includes(21) ? (
                                randomArr[19] ? (
                                    <Image className={styles.tableImg} src={teams[randomArr[19]].img} alt="logo" />
                                ) : null
                            ) : null}
                        </div>
                        <div>{arr.includes(21) ? (randomArr[19] ? teams[randomArr[19]].name : null) : null}</div>
                    </div>
                </div>
                <div className={styles.matchTable1}>
                    <div className={`${styles.matchTable1Info} info21`}>
                        <div>
                            {arr.includes(22) ? (
                                randomArr[20] ? (
                                    <Image className={styles.tableImg} src={teams[randomArr[20]].img} alt="logo" />
                                ) : null
                            ) : null}
                        </div>
                        <div>{arr.includes(22) ? (randomArr[20] ? teams[randomArr[20]].name : null) : null}</div>
                    </div>
                    <div>vs</div>
                    <div className={`${styles.matchTable1Info} info22`}>
                        <div>
                            {arr.includes(23) ? (
                                randomArr[21] ? (
                                    <Image className={styles.tableImg} src={teams[randomArr[21]].img} alt="logo" />
                                ) : null
                            ) : null}
                        </div>
                        <div>{arr.includes(23) ? (randomArr[21] ? teams[randomArr[21]].name : null) : null}</div>
                    </div>
                </div>
                <div className={styles.matchTable1}>
                    <div className={`${styles.matchTable1Info} info23`}>
                        <div>
                            {arr.includes(24) ? (
                                randomArr[22] ? (
                                    <Image className={styles.tableImg} src={teams[randomArr[22]].img} alt="logo" />
                                ) : null
                            ) : null}
                        </div>
                        <div>{arr.includes(24) ? (randomArr[22] ? teams[randomArr[22]].name : null) : null}</div>
                    </div>
                    <div>vs</div>
                    <div className={`${styles.matchTable1Info} info24`}>
                        <div>
                            {arr.includes(25) ? (
                                randomArr[23] ? (
                                    <Image className={styles.tableImg} src={teams[randomArr[23]].img} alt="logo" />
                                ) : null
                            ) : null}
                        </div>
                        <div>{arr.includes(25) ? (randomArr[23] ? teams[randomArr[23]].name : null) : null}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
