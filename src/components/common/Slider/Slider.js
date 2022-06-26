import React from 'react';
import stylesheet from './Slider.module.css'



const Slider = (props) => {



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
        <div onWheel={onWheel} className={stylesheet.sliderWrapper}>
            <div className={stylesheet.slider}>
                <div className={stylesheet.frame}>
                    {posts}
                </div>
            </div>
        </div>
    )
}

export default Slider;