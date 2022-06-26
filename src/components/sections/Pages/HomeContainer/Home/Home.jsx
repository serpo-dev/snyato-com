import React from 'react'
import stylesheet from './Home.module.css'
import Loading from '../../../../common/Loading/Loading'
import { NavLink } from 'react-router-dom'



const Home = (props) => {

    let posts = props.posts;

    const getNextPost = props.getNextPost;
    const getPreviousPost = props.getPreviousPost;

    let sum = props.sum;
    const incrementSum = props.incrementSum;

    const onWheel = (e) => {
        if (e.deltaY > 0) {
            incrementSum(1);
        } else if (e.deltaY < 0) {
            incrementSum(-1);
        }

        if (sum === 3) {
            getNextPost();
        } else if (sum === -3) {
            getPreviousPost();
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
                <div className={stylesheet.loading}>
                    {props.isFetching ? <Loading /> : null}
                </div>
            </div>

            <div onWheel={onWheel} className={stylesheet.sliderWrapper}>
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