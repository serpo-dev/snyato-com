import React from 'react';
import stylesheet from './Slider.module.css'
import Loading from '../../common/Loading/Loading'



const Slider = (props) => {

    const state = props.state;
    const posts = props.state.posts;
    const onWheel = props.onWheel;

    return (
        <div>
            <div className={stylesheet.loading}>
                {state.isFetching ? <Loading /> : null}
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

export default Slider;