import React, { useState, useRef } from 'react'
import './index.css'

export default function DragAndDrop() {
    const [list, setList] = useState(['Dinesh 1','Html 2',  'Jhanvi 2', 'Harsh 3', 'Shreyas 4', 'Sagar 5', 'HtDoc 6']);
    const dragItem = useRef();
    const dragOverItem = useRef();

    const dragStart = (e, position) => {
        dragItem.current = position;
    };

    const dragEnter = (e, position) => {
        dragOverItem.current = position;
    };

    const drop = (e) => {
        const copyListItems = [...list];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setList(copyListItems);
    };
    return (
        <>
            {
                list &&
                list?.map((item, index) => (
                    <div style={{ backgroundColor: 'lightblue', margin: '8px', textAlign: 'center', fontSize: '40px' }}
                        onDragStart={(e) => dragStart(e, index)}
                        onDragEnter={(e) => dragEnter(e, index)}
                        onDragEnd={drop}
                        key={index}
                        draggable>
                        {item}
                    </div>
                ))}
        </>
    )
}

