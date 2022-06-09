import React from 'react'
import "./project.css"
import spotifyPic from "../../img/Spotify.png"
import veganPic from "../../img/Vegan.png"
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Project = ({ img, Link, GitLink, name }) => {
    return (

        <div className='p'>
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <div className='a-img'>
                <a href={Link} target="_blank" rel="noreferrer" >
                    <img src={img} className="p-img" />
                </a>
            </div>
            <div className='icons'>
                <ArrowDropUpIcon />
                <p className='link-demo'>Link/Demo</p>
            </div>
            <a href={GitLink} target="_blank" rel="noreferrer">
                <GitHubIcon className='GitHub' />
            </a>
            <p className='p-name'>{name}</p>
        </div>


    )
}

export default Project