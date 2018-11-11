import React, { Component } from 'react';
import './App.css';
import {cloneStudents, listStudents} from "../../repository/studentRepository";
import StudentsList from "../StudentsList/StudentsList";
import EditStudentDetails from "../EditStudentDetails/EditStudentDetails";
const _ = require('lodash');

class App extends Component {

    constructor(props) {
        super(props);

        this.state= {
            students: listStudents(),
            studentSelected: null
        };
    }

    onStudentChange = (student) => {
        this.setState((state,props) => {
            return {
                studentSelected: student
            };
        });
    };

    onStudentEdit = (student) => {

        let studentIndex = this.state.students.findIndex((obj) => _.isEqual(obj, this.state.studentSelected));

        this.setState((state,props) => {
            const newStudentsArrayRef = cloneStudents(state,studentIndex,student);
            return { students: newStudentsArrayRef,
                studentSelected: null}
        });
    }

    render() {

        return (
            <div className="container">
                <h3 className="text-success font-weight-bold mt-5">Click to edit  </h3>
                   <div className="row">
                    <div className="col-8">
                        <StudentsList onStudentChange = {(student) => this.onStudentChange(student)} students={this.state.students}/>
                    </div>
                   </div>

                    { this.state.studentSelected &&
                    <div className="row">
                    <div className="col-8 mr-5">
                        <EditStudentDetails student={this.state.studentSelected} onStudentEdit={this.onStudentEdit} />
                    </div></div>
                    }



            </div>
        );
    }

}

export default App;

