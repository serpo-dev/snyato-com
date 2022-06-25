import React from 'react'
import stylesheet from './Home.module.css'
import Loading from '../../../../common/Loading/Loading'
import { NavLink } from 'react-router-dom'



const Home = (props) => {

    let posts = props.posts;
    let posY = props.posY;

    let frame = document.querySelector(`.${stylesheet.frame}`)

    console.log(posY)

    const getNextPost = () => {
        frame.style.top = "-350px"
        frame.style.transition = "top 1s 0s";
    }

    const animation = () => {
        if (frame.style.top === '-350px') {
            props.updateSlider();
            props.getPosts();
            frame.style.top = "0px"
            frame.style.transition = null;
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
            <button onClick={() => {
                animation();
                setTimeout(() => {
                    getNextPost();
                }, 50);
            }}>
                Next
            </button>
            <div className={stylesheet.loading}>
                {props.isFetching ? <Loading /> : null}
            </div>
            <div className={stylesheet.sliderWrapper}>
                <div className={stylesheet.slider}>
                    <div className={stylesheet.frame}>
                        {posts}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;