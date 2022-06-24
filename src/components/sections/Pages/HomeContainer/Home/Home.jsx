import React from 'react'
import stylesheet from './Home.module.css'
import Loading from '../../../../common/Loading/Loading'
import { NavLink } from 'react-router-dom'



const Home = (props) => {

    let posts = props.posts;

    let pass = false;

    const nextPost = () => {
        if (pass === true) {
            pass = false;
            props.updateSlider();
        } else if (pass === false) {
            pass = true;
        }
    }

    const typev = () => {
        console.log(pass)
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
            <button onClick={() => {nextPost(); typev()}}>Next</button>
            <div className={stylesheet.slider}>
                {posts}
            </div>
            <div className={stylesheet.loading}>
                {props.isFetching ? <Loading /> : null}
            </div>
        </div>
    )
}

export default Home;