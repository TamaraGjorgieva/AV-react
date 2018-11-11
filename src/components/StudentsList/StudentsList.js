import React, { Component } from 'react';
import StudentItem from '../StudentItem/Studentitem';

class StudentsList extends Component {

    render() {
        return ([
            this.props.students.map((item) =>
                <StudentItem student={item} key={item.index}/>
            )
        ]);
    }
}

export default StudentsList;
