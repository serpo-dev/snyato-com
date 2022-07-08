import React from 'react'
import { switchSection, incrementSum } from '../../../../redux/HomeReducer'
import * as slider from '../.././../../thunks/sliderThunk';
import Post from './Home/Post/Post'
import Home from './Home/Home'
import { connect } from 'react-redux'
import stylesheet from '../../../common/Slider/Slider.module.css'


class HomeAPIContainer extends React.Component {

    render() {
        return (
            <Home
                state={this.props}
            />
        )

    }
}


let mapStateToProps = (state) => {
    return {
        posts: state.Home.posts.map((post, i) => <div key={i} className={stylesheet.item}><Post content={post.content} /></div>),
        isFetching: state.CommonElements.isFetching,
        startCount: state.Home.startCount,
        sum: state.Home.sum,
        state: state
    }
}

const startSlide = slider.start;
const nextSlide = slider.next;
const backSlide = slider.back;

const HomeContainer = connect(mapStateToProps,
    {
        switchSection,
        startSlide,
        nextSlide,
        backSlide,
        incrementSum
    }
)(HomeAPIContainer)


export default HomeContainer;