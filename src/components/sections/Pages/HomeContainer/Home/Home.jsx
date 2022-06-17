import React from 'react'
import stylesheet from './Home.module.css'
import Recommendations from './Recommendations/Recommendations'
import Following from './Following/Following'
import Loading from '../../../../common/Loading/Loading'
import { NavLink } from 'react-router-dom'



const Home = (props) => {
    return (
        <div>

            <div className={stylesheet.toggle}>
                <div> </div><NavLink to='/following'>
                    <p>Following</p>
                </NavLink>
                <NavLink to='/home'>
                    <p>Recommendations</p>
                </NavLink>
            </div>
            {props.posts}

            <div className={stylesheet.loading}>
                {props.isFetching ? <Loading /> : null}
            </div>

        </div>
    )
}

export default Home;