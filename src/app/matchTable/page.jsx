"use client";
import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styles from "../ui/matchTable/matchTable.module.css";
import AC from "../ui/assets/images/AC.png";
import Barcelona from "../ui/assets/images/Barcelona.png";
import Chelasea from "../ui/assets/images/Chelsea.png";
import MC from "../ui/assets/images/MC.png";
import Liverpool from "../ui/assets/images/Liverpool.png";
import PSG from "../ui/assets/images/PSG.png";
import CP from "../ui/assets/images/CP.png";
import MU from "../ui/assets/images/MU.png";
import Image from "next/image";

const ItemTypes = {
    TEAM: "box",
};

const MatchTable = () => {
    // 队伍图标组件
    const TeamIcon = ({ name, icon }) => {
        const [, drag] = useDrag(() => ({
            type: ItemTypes.TEAM,
            item: { name, icon },
        }));

        return (
            <div ref={drag} style={{ cursor: "move", color: "white" }} className={styles.teams}>
                {name ? <Image src={icon} alt={name} className={styles.tableImg} /> : null}
                {/* {name} */}
            </div>
        );
    };

    // 对阵表格组件
    const VsTable = ({ onDrop }) => {
        const [, drop] = useDrop({
            accept: ItemTypes.TEAM,
            drop: (item) => onDrop(item.name, item.icon),
        });

        return (
            <div ref={drop} style={{ color: "white", background: "grey", width: "100px" }}>
                <div>Drop Zone</div>
            </div>
        );
    };
    const [teamMatches, setTeamMatches] = useState(Array(8).fill(null));

    const handleDrop = (teamName, icon, index) => {
        const newTeamMatches = [...teamMatches];
        newTeamMatches[index] = { name: teamName, icon: icon };
        setTeamMatches(newTeamMatches);
        newTeamMatches.forEach((objB, index) => {
            if (objB !== null) {
                let indexA = teams.findIndex((objA) => objA && objA.name === objB.name);
                if (indexA !== -1) {
                    setTeams((prev) => {
                        let newTeams = [...prev];
                        newTeams[indexA] = { id: null, name: null, icon: null };
                        return newTeams;
                    });
                }
            }
        });
        console.log(newTeamMatches);
    };

    const [teams, setTeams] = useState([
        { id: 1, name: "A.C. Milan", icon: AC },
        { id: 2, name: "FC Barcelona", icon: Barcelona },
        { id: 3, name: "Chelsea F.C.", icon: Chelasea },
        { id: 4, name: "Manchester City F.C.", icon: MC },
        { id: 5, name: "Liverpool F.C.", icon: Liverpool },
        { id: 6, name: "Paris Saint-Germain F.C.", icon: PSG },
        { id: 7, name: "Crystal Palace F.C.", icon: CP },
        { id: 8, name: "Manchester United F.C.", icon: MU },
    ]);
    return (
        <div>
            <DndProvider backend={HTML5Backend}>
                <div className={styles.teamContainer}>
                    {teams.map((team) => (
                        <TeamIcon key={team.id} name={team.name} icon={team.icon} />
                    ))}
                </div>
                {/* <div className={styles.matchTable}>
                    <div className={styles.matchTable2}>
                        {teamMatches.map((team, index) => (
                            <div key={`match-${index}`} style={{ color: "white" }}>
                                Match {index + 1}: {team || "Empty"}
                                <VsTable key={index} onDrop={(teamName) => handleDrop(teamName, index)} />
                            </div>
                        ))}
                    </div>
                </div> */}
                <div className={styles.matchTable}>
                    <div className={styles.test}>
                        {teamMatches.map((team, index) => (
                            <div key={index} className={styles.test4}>
                                {/* <div className={index % 2 === 0 ? styles.test2 : styles.test3}>
                                    <VsTable
                                        key={index}
                                        onDrop={(teamName, icon) => handleDrop(teamName, icon, index)}
                                    />
                                    {team ? (
                                        <Image
                                            src={team.icon}
                                            alt={team.name}
                                            style={{ width: "50px", height: "50px" }}
                                        />
                                    ) : null}
                                    <div style={{ color: "white" }}>{team ? team.name : null}</div>
                                    {index % 2 === 0 ? <div>VS</div> : null}
                                </div> */}
                                <div className={index % 2 === 0 ? styles.test2 : styles.test3}>
                                    {team ? null : (
                                        <VsTable
                                            key={index}
                                            onDrop={(teamName, icon) => handleDrop(teamName, icon, index)}
                                        />
                                    )}

                                    {team ? (
                                        <Image
                                            src={team.icon}
                                            alt={team.name}
                                            style={{ width: "50px", height: "50px" }}
                                        />
                                    ) : null}
                                    <div style={{ color: "white" }}>{team ? team.name : null}</div>
                                    {index % 2 === 0 ? <div>VS</div> : null}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </DndProvider>
        </div>
    );
};

export default MatchTable;
