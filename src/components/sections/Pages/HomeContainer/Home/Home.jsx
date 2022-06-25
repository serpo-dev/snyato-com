import React from 'react'
import stylesheet from './Home.module.css'
import Loading from '../../../../common/Loading/Loading'
import { NavLink } from 'react-router-dom'



const Home = (props) => {

    let activeSliderFrame = stylesheet.secondFrame;
    console.log(activeSliderFrame)

    const activeFrameToggle = () => {
        activeSliderFrame = stylesheet.thirdFrame;
        console.log(activeSliderFrame)
    }

    let posts = props.posts;

    let pass = false;

    const nextPost = () => {
        if (pass === true) {
            pass = false;
            props.updateSlider();
            props.getPosts();
        } else if (pass === false) {
            pass = true;
            activeFrameToggle();
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
                    {posts}
            </div>
        </div>
    )
}

export default Home;