import React, { useState, useEffect, useRef } from "react";
import { Icon } from "antd";

const DigitalClock = () => {
    const [time, setTime] = useState<Date>(new Date());
    let update = useRef<any>();

    useEffect(() => {
        update.current = setInterval(() => {
            setTime(new Date());
        }, 1 * 1000);

        return () => clearInterval(update.current);
    }, [update]);

    return (
        <div className={`app-digital-clock`}>
            <Icon type="clock-circle" style={{ marginRight: 10 }}/>
            <span>
                { time.toLocaleTimeString() }
            </span>
        </div>
    )
}

export default DigitalClock;

