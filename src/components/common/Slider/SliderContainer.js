import React from 'react';
import Slider from './Slider';

let connectToggle = true;


class SliderContainer extends React.Component {

    componentDidMount() {
        const startSlide = this.props.state.startSlide;
        let startCount = this.props.state.startCount;
        const postsType = this.props.postsType;

        startSlide(startCount);
    }

    render() {
        let state = this.props.state;
        const postsType = this.props.postsType;

        const nextSlide = state.nextSlide;
        const backSlide = state.backSlide;

        let sum = state.sum;
        const incrementSum = state.incrementSum;
        let startCount = state.startCount;

        const onWheel = (e) => {
            if (connectToggle === true) {
                if (e.deltaY > 0) {
                    incrementSum(1);
                } else if (e.deltaY < 0) {
                    incrementSum(-1);
                }

                if (sum === 3) {
                    connectToggle = false;
                    nextSlide(startCount);
                    setTimeout(() => {
                        connectToggle = true;
                    }, 200);
                }
                else if (sum === -3) {
                    connectToggle = false;
                    backSlide(startCount);
                    setTimeout(() => {
                        connectToggle = true
                    }, 200)
                }
            }
        }

        return (
            <Slider
                state={state}
                onWheel={onWheel}
                postsType={postsType}
            />
        )
    }

}

export default SliderContainer;