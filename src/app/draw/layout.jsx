import React from "react";
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
import drawScene from "../ui/assets/images/draw.png";
import Image from "next/image";

const layout = ({ children }) => {
    return (
        <div className={styles.drawPageContainer}>
            <h1 className={styles.headTitle}>2022-2023赛季 84452韭菜杯抽签仪式</h1>
            <h2 className={styles.headTitle}>2022-2023 Season &nbsp;&nbsp;84452 LEEK CUP DRAW CEREMONY</h2>
            <div className={styles.title}>
                <h1>参赛队伍巡礼</h1>
                <h2>Clubs in the draw</h2>
            </div>
            <div className={styles.stageContainer}>
                <div className={styles.stage}>
                    <div className={styles.control}>
                        <div className={styles.imgWrap}>
                            <div className={styles.img}>
                                <Image src={AC} alt="AC" />
                            </div>
                            <div className={styles.img}>
                                <Image src={Barcelona} alt="Barcelona" />
                            </div>
                            <div className={styles.img}>
                                <Image src={Chelasea} alt="Chelasea" />
                            </div>
                            <div className={styles.img}>
                                <Image src={MC} alt="MC" />
                            </div>
                            <div className={styles.img}>
                                <Image src={Sunderland} alt="Sunderland A.F.C." />
                            </div>
                            <div className={styles.img}>
                                <Image src={Liverpool} alt="Liverpool" />
                            </div>
                            <div className={styles.img}>
                                <Image src={PSG} alt="psg" />
                            </div>
                            <div className={styles.img}>
                                <Image src={CP} alt="CP" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.stage}>
                    <div className={styles.control}>
                        <div className={styles.imgWrap}>
                            <div className={styles.img}>
                                <Image src={RealMadrid} alt="RealMadrid" />
                            </div>
                            <div className={styles.img}>
                                <Image src={Arsenal} alt="Arsenal" />
                            </div>
                            <div className={styles.img}>
                                <Image src={SB29} alt="SB29" />
                            </div>
                            <div className={styles.img}>
                                <Image src={Birmingham} alt="Birmingham" />
                            </div>
                            <div className={styles.img}>
                                <Image src={Villarreal} alt="Villarreal" />
                            </div>
                            <div className={styles.img}>
                                <Image src={Bayern} alt="Bayern" />
                            </div>
                            <div className={styles.img}>
                                <Image src={Frankfurt} alt="Frankfurt" />
                            </div>
                            <div className={styles.img}>
                                <Image src={MU} alt="MU" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.stageContainer}>
                <div className={styles.stage}>
                    <div className={styles.control}>
                        <div className={styles.imgWrap}>
                            <div className={styles.img}>
                                <Image src={Brugge} alt="Club Brugge KV" />
                            </div>
                            <div className={styles.img}>
                                <Image src={InterMilan} alt="InterMilan" />
                            </div>
                            <div className={styles.img}>
                                <Image src={Wolverhampton} alt="Wolverhampton" />
                            </div>
                            <div className={styles.img}>
                                <Image src={NewCastel} alt="NewCastel" />
                            </div>
                            <div className={styles.img}>
                                <Image src={Aston_Villa} alt="Aston_Villa" />
                            </div>
                            <div className={styles.img}>
                                <Image src={Brighton} alt="Brighton" />
                            </div>
                            <div className={styles.img}>
                                <Image src={Southampton} alt="Southampton" />
                            </div>
                            <div className={styles.img}>
                                <Image src={Lazio} alt="Lazio" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Image src={drawScene} className={styles.drawImage} alt="drawScene" />

            {children}
            <div style={{ height: "150px" }}></div>
        </div>
    );
};

export default layout;
