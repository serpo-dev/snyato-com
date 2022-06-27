import React from 'react'
import { setPosts, switchSection, updateSlider, comebackSlider, incrementSum } from '../../../../redux/HomeReducer'
import { isFetchingToggle } from '../../../../redux/CommonElementsReducer'
import Post from './Home/Post/Post'
import Home from './Home/Home'
import { connect } from 'react-redux'
import stylesheet from '../../../common/Slider/Slider.module.css'


class HomeAPIContainer extends React.Component {

    render() {
        
const axiosType = 'posts';

        return (
            <Home
                state={this.props}
                axiosType={axiosType}
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
    }
}


const HomeContainer = connect(mapStateToProps,
    {
        switchSection,
        isFetchingToggle,
        setPosts,
        updateSlider,
        comebackSlider,
        incrementSum
    }
)(HomeAPIContainer)


export default HomeContainer;