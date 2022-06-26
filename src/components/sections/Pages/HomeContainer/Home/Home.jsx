import React from 'react'
import stylesheet from './Home.module.css'
import Loading from '../../../../common/Loading/Loading'
import Slider from '../../../../common/Slider/Slider'
import { NavLink } from 'react-router-dom'



const Home = (props) => {

    return (
        <div>
            <div className={stylesheet.toggle}>
                <NavLink to='/home?=following'>
                    <p>Following</p>
                </NavLink>
                <NavLink to='/home'>
                    <p>Recommendations</p>
                </NavLink>
                <div className={stylesheet.loading}>
                    {props.isFetching ? <Loading /> : null}
                </div>
            </div>

            <Slider
                posts={props.posts}
                getNextPost={props.getNextPost}
                getPreviousPost={props.getPreviousPost}
                sum={props.sum}
                incrementSum={props.incrementSum}
            />
        </div>
    )
}

export default Home;