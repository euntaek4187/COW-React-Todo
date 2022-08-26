import React from 'react';
import "./Header.css";

const Template = ({children, todoLength}) => {
    return (
    <div className='template'>
        <div className='title'>To Do List</div>
        <div><button className='full-list'>오늘 해야 할 일({todoLength})</button></div>
        <div>{children}</div>
    </div>
    );
};

export default Template;

