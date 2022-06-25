import React from 'react'
import stylesheet from './Home.module.css'
import Loading from '../../../../common/Loading/Loading'
import { NavLink } from 'react-router-dom'



const Home = (props) => {

    let posts = props.posts;

    let pass = false;

    const nextPost = () => {

        let item = document.querySelector(`.${stylesheet.frame}`)

        if (pass === true) {
            pass = false;
            props.updateSlider();
            props.getPosts();
            item.style.top = "0px";
            item.style.transition = "all ease 1s";
        } else if (pass === false) {
            pass = true;
            item.style.top = "-350px";
            item.style.transition = "all ease 1s";
        }

    }

    return (
        <div>
            <div className={stylesheet.toggle}>
                <NavLink to='/home?=following'>
                    <p>Following</p>
                </NavLink>
                <NavLink to='/home'>
                    <p>Recommendations</p>
                </NavLink>
            </div>
            <button onClick={() => { nextPost() }}>Next</button>
            <div className={stylesheet.loading}>
                {props.isFetching ? <Loading /> : null}
            </div>
            <div className={stylesheet.slider}>
                <div className={stylesheet.frame}>
                    {posts}
                </div>
            </div>
        </div>
    )
}

export default Home;