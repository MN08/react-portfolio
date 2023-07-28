import ParticlesBg from "particles-bg";
import React from "react";
import { Fade } from "react-awesome-reveal";


class Header extends React.Component{
    render(){
        if(!this.props.data ) return null;
        const project = this.props.data.project;
        const github = this.props.data.github;
        const name = this.props.data.name;
        const description = this.props.data.description;

        return(
            <header id="home">
                <ParticlesBg color="#ffffff" type="cobweb" bg={true}/>
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show Navigation">Show Navigation</a>
                    <a className="mobile-btn" href="#home" title="Hide Navigation">Hide Navigation</a>

                    <ul id="nav" className="nav">
                        <li className="current">
                            <a className="smoothscroll" href="#home">Home</a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#about">About</a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#resume">Resume</a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#work">Work</a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>

                <div className="row banner">
                    <div className="banner-text">
                        <Fade bottom>
                            <h1 className="responsive-headline">{name}</h1>
                        </Fade>
                        <Fade bottom duration={1200}>
                            <h3>{description}</h3>
                        </Fade>
                        <hr/>
                        <Fade bottom duration={2000}>
                            <ul className="social">
                                <a href={project} className="button btn project-btn">
                                    <i className="fa fa-book"></i>Project
                                </a>
                                <a href={github} className="button btn github-btn">
                                    <i className="fa fa-github"></i>Github
                                </a>
                            </ul>
                        </Fade>

                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
