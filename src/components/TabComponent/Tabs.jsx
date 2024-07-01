import React, { useState } from "react";

import ARRR from '../../pages/ARRR';


export default function Tabs() {
    const [activeTab, setActiveTab] = useState("GNATI");


    const handleTab3 = () => {
        setActiveTab("GNATI");
    };


    return (
        <div className="maintab">
            <div className="Tabs">
                {/* Tab nav */}
                <ul className="nav">
                    <li className={activeTab === "GNATI" ? "active" : ""}>
                        <div
                            role="button"
                            tabIndex={0}
                            onClick={handleTab3}
                            onKeyPress={() => { }}>
                            NATI
                        </div>
                    </li>
                </ul>
            </div>
            {activeTab === "GNATI" && <ARRR />}
        </div>
    );
}



