import React from 'react'
import stylesheet from './Home.module.css'
import SliderContainer from '../../../../common/Slider/SliderContainer'
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
            </div>

            <SliderContainer
                state={props.state}
                axiosType={props.axiosType}
            />
        </div>
    )
}

export default Home;