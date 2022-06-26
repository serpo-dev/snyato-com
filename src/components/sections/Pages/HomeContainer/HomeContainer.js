import React from 'react'
import { setPosts, switchSection, updateSlider, comebackSlider, incrementSum } from '../../../../redux/HomeReducer'
import { isFetchingToggle } from '../../../../redux/CommonElementsReducer'
import Post from './Home/Post/Post'
import Home from './Home/Home'
import { connect } from 'react-redux'
import * as axios from 'axios'
import stylesheet from '../../../common/Slider/Slider.module.css'


class HomeAPIContainer extends React.Component {

    componentDidMount() {

        // load data at the start from db.json

        this.props.isFetchingToggle(true);

        let startCount = this.props.startCount;
        let endCount = startCount + 3;

        axios
            .get(`http://localhost:3001/posts?_start=${startCount}&_end=${endCount}`)
            .then(response => {
                this.props.isFetchingToggle(false)
                this.props.setPosts(response.data)
            });

    }


    render() {

        const getNextPost = () => {

            // load data at the start from db.json

            this.props.isFetchingToggle(true);
            this.props.updateSlider();

            let startCount = this.props.startCount;
            let endCount = startCount + 3;

            let frame = document.querySelector(`.${stylesheet.frame}`)


            if (frame.style.top === "-450px") {

                axios
                    .get(`http://localhost:3001/posts?_start=${startCount}&_end=${endCount}`)
                    .then(response => {
                        this.props.isFetchingToggle(false)
                        this.props.setPosts(response.data)
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
                this.props.isFetchingToggle(false)
            }
        }

        const getPreviousPost = () => {

            // load data at the start from db.json

            this.props.isFetchingToggle(true);
            this.props.comebackSlider();

            let startCount = this.props.startCount - 2;
            let endCount = startCount + 3;

            let frame = document.querySelector(`.${stylesheet.frame}`)


            if (startCount >= 0) {

                axios
                    .get(`http://localhost:3001/posts?_start=${startCount}&_end=${endCount}`)
                    .then(response => {
                        this.props.isFetchingToggle(false)
                        this.props.setPosts(response.data)
                        frame.style.top = "-900px"
                        frame.style.transition = null;
                        setTimeout(() => {
                            frame.style.top = "-450px"
                            frame.style.transition = "top 0.2s ease-out 0s";
                        }, 50)
                    });
            } else {
                frame.style.top = "0px"
                frame.style.transition = "top 0.2s ease-out 0s";
                setTimeout(() => {
                    frame.style.top = "100px"
                    setTimeout(() => {
                        frame.style.top = "0px"
                    }, 50);
                }, 50);

                this.props.isFetchingToggle(false)
            }
        }



        return (
            <Home
                posts={this.props.posts}
                isFetching={this.props.isFetching}
                getNextPost={getNextPost}
                getPreviousPost={getPreviousPost}
                sum={this.props.sum}
                incrementSum={this.props.incrementSum}
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

// let mapDispatchToProps = (dispatch) => {
//     return {
//         callSwitchSection: (sectionName) => {
//             dispatch(switchSection(sectionName))
//         },
//         callIsFetchingToggle: (isFetching) => {
//             dispatch(isFetchingToggle(isFetching))
//         },
//         callSetPosts: (newPosts) => {
//             dispatch(setPosts(newPosts))
//         }
//     }
// }

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