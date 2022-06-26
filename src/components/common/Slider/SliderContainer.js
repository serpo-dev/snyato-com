import React from 'react';
import Slider from './Slider';
import stylesheet from './Slider.module.css'
import * as axios from 'axios'



class SliderContainer extends React.Component {

    constructor(props) {
        super(props);
        this.connectToggle = true;
    }

    componentDidMount() {

        let state = this.props.state;
        let axiosType = this.props.axiosType;

        this.connectToggle = true;

        // load data at the start from db.json

        state.isFetchingToggle(true);

        let startCount = state.startCount;
        let endCount = startCount + 3;

        axios
            .get(`http://localhost:3001/${axiosType}?_start=${startCount}&_end=${endCount}`)
            .then(response => {
                state.isFetchingToggle(false)
                state.setPosts(response.data)
            });

        console.log(2)

    }

    render() {

        let state = this.props.state;
        let axiosType = this.props.axiosType;

        const getNextPost = () => {

            // load data at the start from db.json

            state.isFetchingToggle(true);
            state.updateSlider();

            let startCount = state.startCount;
            let endCount = startCount + 3;

            let frame = document.querySelector(`.${stylesheet.frame}`)

            if (frame.style.top === "-450px") {

                axios
                    .get(`http://localhost:3001/${axiosType}?_start=${startCount}&_end=${endCount}`)
                    .then(response => {
                        state.isFetchingToggle(false)
                        state.setPosts(response.data)
                        frame.style.top = "0px"
                        frame.style.transition = null;
                        setTimeout(() => {
                            frame.style.top = "-450px"
                            frame.style.transition = "top 0.2s ease-out 0s";
                        }, 50)
                    });
            } else {
                frame.style.top = "-450px"
                frame.style.transition = "top 0.2s ease-out 0s";
                state.isFetchingToggle(false)
            }
        }

        const getPreviousPost = () => {

            // load data at the start from db.json

            state.isFetchingToggle(true);
            state.comebackSlider();

            let startCount = state.startCount - 2;
            let endCount = startCount + 3;

            let frame = document.querySelector(`.${stylesheet.frame}`)


            if (startCount >= 0) {

                axios
                    .get(`http://localhost:3001/${axiosType}?_start=${startCount}&_end=${endCount}`)
                    .then(response => {
                        state.isFetchingToggle(false)
                        state.setPosts(response.data)
                        frame.style.top = "-900px"
                        frame.style.transition = null;
                        setTimeout(() => {
                            frame.style.top = "-450px";
                            frame.style.transition = "top 0.2s ease-out 0s";
                        }, 50)
                    });
            } else {
                frame.style.top = "0px"
                frame.style.transition = "top 0.2s ease-out 0s";
                setTimeout(() => {
                    frame.style.top = "100px";
                    setTimeout(() => {
                        frame.style.top = "0px";
                        state.isFetchingToggle(false);
                    }, 50);
                }, 50);


            }
        }

        let sum = state.sum;
        const incrementSum = state.incrementSum;



        const onWheel = (e) => {

            if (this.connectToggle === true) {
                if (e.deltaY > 0) {
                    incrementSum(1);
                } else if (e.deltaY < 0) {
                    incrementSum(-1);
                }

                if (sum === 3) {
                    const propmise = new Promise((resolve) => {
                        getNextPost();
                        this.connectToggle = false;
                        resolve(true);
                    }).then(resolve => {
                        this.connectToggle = resolve;
                    })

                } else if (sum === -3) {
                    const promise = new Promise((resolve) => {
                        getPreviousPost();
                        this.connectToggle = false;
                        resolve(true);
                    }).then(resolve => {
                        this.connectToggle = resolve;
                    })

                }
            }
        }


        return (
            <Slider
                state={this.props.state}
                axiosType={this.props.axiosType}
                onWheel={onWheel}
            />
        )
    }

}

export default SliderContainer;