import React, {useState, useEffect, useMemo} from 'react';
import { B } from "./B.js"

export const A = (props) => {

    console.log('A')
    return (
        <>
            <B/>
            {/* {props.state} */}
        </>
    );
}