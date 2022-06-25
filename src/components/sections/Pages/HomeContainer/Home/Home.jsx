import React from 'react'
import stylesheet from './Home.module.css'
import Loading from '../../../../common/Loading/Loading'
import { NavLink } from 'react-router-dom'



const Home = (props) => {

    let posts = props.posts;

    let frame = document.querySelector(`.${stylesheet.frame}`)
    let btn = document.querySelector(`.${stylesheet.btnNext}`)

    const getNextPost = props.getNextPost;

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
            <button onClick={getNextPost} className={stylesheet.btnNext}>
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