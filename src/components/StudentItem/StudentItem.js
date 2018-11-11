import React, {  } from 'react';
import './StudentItem.css';

const studentItem = (props) => {

    return (
        <li id="item" onClick={() => props.onStudentChange()} className="list-group-item">
            <div id="red">
                <h5>{props.student.firstName} {props.student.lastName}</h5>
            </div>
        </li>
    )
};

export default studentItem;