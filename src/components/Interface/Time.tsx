import React from "react";

import {Select} from "../";

const Time: React.FC = () => {
    const hourses = Array(24)
        .fill(0)
        .map((_, index) => ({
            title: index < 10 ? `0${index}` : `${index}`,
            key: index < 10 ? `0${index}` : `${index}`,
        }));

    const minutes = Array(60)
        .fill(0)
        .map((_, index) => ({
            title: index < 10 ? `0${index}` : `${index}`,
            key: index < 10 ? `0${index}` : `${index}`,
        }));

    return (
        <div className="time">
            <div className="time-hourses">
                <Select choices={hourses} border small />
            </div>
            <span className="time__text">:</span>
            <div className="time-minutes">
                <Select choices={minutes} border small />
            </div>
        </div>
    );
};

export default Time;
