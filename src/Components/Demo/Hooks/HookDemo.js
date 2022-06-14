import React, { useCallback, useMemo, useState } from 'react';
import ClassBased from '../ClassBased/ClassBased';
import DemoOutput from './DemoOutput';
import SortValue from './SortValue';
import Button from './UI/Button/Button';

const HookDemo = () => {
    console.log("HookDemo running");
    const [show, setShow] = useState(false);
    const [allowToggle, setAllowToggle] = useState(false)

    // const toggleHandler = useCallback(() => {
    //     if(allowToggle){
    //         setShow(prev => !prev)
    //     }
    // }, [allowToggle])

    const toggleHandler = useMemo(() => {
        return () => {
            if (allowToggle) {
                setShow(prev => !prev)
            }
        }
    }, [allowToggle])

    const toggleAllowHandler = () => {
        setAllowToggle(!allowToggle)
    }

    const numbers = useMemo(() => [3, 2, 5, 1, 6, 100, 44], []);

    return (
        <div>
            <ClassBased />

            <DemoOutput show={show} />
            <SortValue numbers={numbers} />
            <Button className="btn btn-primary" onClick={toggleHandler}>Toggle Show</Button>
            <Button className="btn btn-primary" onClick={toggleAllowHandler}>Toggle Allowed</Button>
        </div>
    );
}

export default HookDemo;
