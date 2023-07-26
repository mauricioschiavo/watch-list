'use client'

import { useEffect, useState } from "react"

export function Clock() {

    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    }
    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    return <>
        <div suppressHydrationWarning>
            {date.toDateString()} - {date.toLocaleTimeString()}
        </div>
    </>
}