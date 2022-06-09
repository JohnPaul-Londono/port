import React from 'react'
import "./projectList.css"
import Project from "../project/Project"
import { projects } from "../../data"

const ProjectList = () => {
    return (
        <div className='projectlist'>
            <div className="pl-text">
                <h1 className='pl-title'>Recent Projects</h1>
                <p>More to come</p>
                <p className="pl-description"> </p>
            </div>
            <div className="pl-list">
                {projects.map(item => (
                    <Project key={item.id} img={item.img} Link={item.Link} GitLink={item.GitLink} name={item.name}/ >
                ))}
            </div>
        </div>
    )
}

export default ProjectList;