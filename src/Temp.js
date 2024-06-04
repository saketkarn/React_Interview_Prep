import React, { useEffect } from 'react';

const Temp = () => {
    useEffect(() => {
        const intervalId = setTimeout(() => {
            console.log("hello from setTimeout");
        }, 1000);
        
        return () => {
            clearTimeout(intervalId);
        };
    }, []);

    return (
        <div>
            <h1>Checking set timeout</h1>
        </div>
    );
};

export default Temp;
