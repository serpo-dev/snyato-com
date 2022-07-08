import stylesheet from '../components/common/Slider/Slider.module.css';
import { SliderAPI } from '../api/api';

import * as common from '../redux/CommonElementsReducer';
import * as home from '../redux/HomeReducer';

const isFetchingToggle = common.isFetchingToggle;
const setPosts = home.setPosts;

const forwardSlider = home.forwardSlider;
const backSlider = home.backSlider;


let frame = document.querySelector(`.${stylesheet.frame}`)
console.log(frame)


export const start = (startCount) => (dispatch) => {
    dispatch(isFetchingToggle(true));
    SliderAPI.getPosts(startCount)
        .then(data => {
            dispatch(isFetchingToggle(false))
            dispatch(setPosts(data))
        });
}

export const next = (startCount) => (dispatch) => {
    dispatch(isFetchingToggle(true));
    dispatch(forwardSlider());

    if (frame.style.top === "-450px") {
        SliderAPI.getPosts(startCount)
            .then(data => {
                dispatch(isFetchingToggle(false))
                dispatch(setPosts(data))
                frame.style.top = "0px"
                frame.style.transition = null
            })
            .then(() => {
                frame.style.top = "-450px"
                frame.style.transition = "top 0.2s ease-out 0s";
            })

    } else {
        frame.style.top = "-450px"
        frame.style.transition = "top 0.2s ease-out 0s";
        dispatch(isFetchingToggle(false))
    }
}

export const back = (startCount) => (dispatch) => {
    dispatch(isFetchingToggle(true));
    dispatch(backSlider());

    let fixBagStartCount = startCount - 2;

    if (startCount >= 0) {

        SliderAPI.getPosts(fixBagStartCount)
            .then(data => {
                dispatch(isFetchingToggle(false))
                dispatch(setPosts(data))
                frame.style.top = "-900px"
                frame.style.transition = null;
            })
            .then(() => {
                frame.style.top = "-450px";
                frame.style.transition = "top 0.2s ease-out 0s";
            })

    } else {
        frame.style.top = "0px";
        frame.style.transition = "top 0.2s ease-out 0s";
        setTimeout(() => {
            frame.style.top = "100px";
            setTimeout(() => {
                frame.style.top = "0px";
                dispatch(isFetchingToggle(false));
            }, 50);
        }, 50);


    }
}