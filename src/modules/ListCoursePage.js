import React, { Component } from 'react'
import { GetCourseList } from '../APIRequest';
import { Link } from 'react-router-dom';

export default class ListCoursePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }
    }
    componentDidMount() {
        GetCourseList().then((data) => {
            this.setState({courses:data})
        })
    }
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Название</td>
                            <td>Описание</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            this.state.courses != null && this.state.courses.map((course) =>
                                <tr key={course.id}>
                                    <td><Link to={{pathname: '/course'}} state={{course: course}}>{course.title}</Link></td>
                                    <td>{course.description}</td>
                                    
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
