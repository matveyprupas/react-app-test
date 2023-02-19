import React from 'react';
import { C } from "./C.js"

export const B = React.memo(() => {

    console.log('B')
    return (
        <>
            <C/>
        </>
    );
}) 

