
import React, { Component } from 'react';


class StudentItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            red: true,
            student:this.props.student,
        }
    }


    changeColor(){
        this.setState({red: !this.state.red})

    }

    render() {
        let btn_class=null;
        let show_hide = null;
          if(this.state.red)
          {
              btn_class = "btn btn-danger";
              show_hide ="d-none";
          }

          else {
              btn_class = "btn btn-primary";
              show_hide ="d-block";
        }



        return [


            <tr key={this.props.student.index}>

                <td>{this.state.student.firstName}</td>
                <td>{this.state.student.lastName}</td>
                <td><span  className={show_hide}>{this.state.student.index}</span></td>
                <td><span  className={show_hide}>{this.state.student.direction}</span></td>
                <td><button className={btn_class}  onClick={this.changeColor.bind(this)} >Edit...</button></td>
            </tr>
        ]
    };
}

export default StudentItem;



