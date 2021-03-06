import React from 'react'
import "./intro.css"
import JohnPic from "../../img/johnPNGcopy.png"
import JohnPicColor from "../../img/johnPNG.png"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useContext } from 'react';
import { ThemeContext } from '../../context';

const Intro = () => {
    const theme = useContext(ThemeContext)

    return (
        <div className='intro'>
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <div>
                        <a href="https://github.com/JohnPaul-Londono" target="_blank" rel="noreferrer">
                            <GitHubIcon className='GitHub2' />
                        </a>
                        <a href="https://www.linkedin.com/in/john-londono-7a4514231/" target="_blank" rel="noreferrer">
                            <LinkedInIcon className='LinkedIn' />
                        </a>
                    </div>
                    <h1 className='intro-name'>John Londono</h1>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            <div className="intro-title-item">Web Developer</div>
                            <div className="intro-title-item">Analytics</div>
                            <div className="intro-title-item">Photographer</div>
                            <div className="intro-title-item2">REACT Created</div>
                        </div>
                    </div>
                    <div className="intro-description">
                        Full Stack Developer who is passionate about Problem Solving and Art.
                    </div>
                </div>
                <svg
                    width="75"
                    height="75"
                    viewBox="0 0 75 75"
                    fill="none"
                    stroke="currentColor"
                    style={{ color:theme.state.darkMode ? "palegreen":"brown" }}
                    className="i-scroll"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="scroll">
                        <path
                            id="Vector"
                            d="M40.5 15L34.5 9L28.5 15"
                            stroke-width="3"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            id="Vector_2"
                            d="M28.5 24L34.5 30L40.5 24"
                            stroke-width="3"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <g id="Group">
                            <path
                                id="Vector_3"
                                d="M9 37.5H60"
                                stroke-width="3"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g>
                        <path
                            id="Vector_4"
                            d="M34.5 27V9"
                            stroke-width="2.9895"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <g id="Group_2">
                            <path
                                id="Vector_5"
                                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                                stroke-width="3"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g>
                    </g>
                </svg>
            </div>

            <div className="intro-right">
                <div className="intro-bg" style={{backgroundImage:theme.state.darkMode ?'linear-gradient(180deg, #525e64, #d7a6d8, #f2dbef, #f8c6e1)':'linear-gradient(180deg, #ffffff, #86a8da,#dbe4f2, #aae1ff)' }}></div>
                <img src={theme.state.darkMode ? JohnPicColor:JohnPic} alt="johnLondono" className="intro-image" />
            </div>
        </div>
    )
}

export default Intro