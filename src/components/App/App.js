import React, { Component } from 'react';
import './App.css';
import EditStudentDetails from '../EditStudentDetails/EditStudentDetails';
import StudentsList from '../StudentsList/StudentsList';
import listStudents from '../../repository/studentRepository';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {students:listStudents()};
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        let obj={
            firstName: event.target[0].value,
            lastName:event.target[1].value,
            index: event.target[2].value,
            direction: event.target[3].value,
            key:event.target[2].value};
        event.target[0].value="";
        event.target[1].value="";
        event.target[2].value="";
        event.target[3].value="";
        let arr=this.state.students;
        arr.push(obj);
        this.setState({students:arr});
    };




    render() {

        return ([

            <div className="container">
                <EditStudentDetails handleSubmitCB={this.handleSubmit}  /> ,
            <table   className={'table table-striped table-bordered mt-5 text-center mw-100'}>
                <thead>
                <tr>
                   <th>FirstName</th>
                    <th>LastName</th>
                    <th>Index</th>
                    <th>Direction</th>
                    <th>Show more details</th>
                </tr>
                </thead>
                <tbody>
                <StudentsList students={this.state.students}/>
                </tbody>
            </table>
            </div>
        ]);
    }
}

export default App;
