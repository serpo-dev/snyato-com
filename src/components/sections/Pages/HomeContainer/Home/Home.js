import React from 'react'
import stylesheet from './Home.module.css'
import SliderContainer from '../../../../common/Slider/SliderContainer'
import { NavLink } from 'react-router-dom'



const Home = (props) => {

    const postsType = 'home';

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

            <SliderContainer
                state={props.state}
                postsType={postsType}
            />
        </div>
    )
}

export default Home;