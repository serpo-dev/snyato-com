import React from 'react'
import { setPosts, switchSection, updateSlider } from '../../../../redux/HomeReducer'
import { isFetchingToggle } from '../../../../redux/CommonElementsReducer'
import Post from './Home/Post/Post'
import Home from './Home/Home'
import { connect } from 'react-redux'
import * as axios from 'axios'
import stylesheet from './Home/Home.module.css'


class HomeAPIContainer extends React.Component {

    componentDidMount() {

        // load data at the start from db.json

        this.props.isFetchingToggle(true);

        let startCount = this.props.startCount;
        let endCount = startCount + 4;

        axios
            .get(`http://localhost:3001/posts?_start=${startCount}&_end=${endCount}`)
            .then(response => {
                this.props.isFetchingToggle(false)
                this.props.setPosts(response.data)
            });

    }


    render() {

        const getPosts = () => {

            // load data at the start from db.json

            this.props.isFetchingToggle(true);

            let startCount = this.props.startCount + 2;
            let endCount = startCount + 4;

            axios
                .get(`http://localhost:3001/posts?_start=${startCount}&_end=${endCount}`)
                .then(response => {
                    this.props.isFetchingToggle(false)
                    this.props.setPosts(response.data)
                });
        }

        return (
            <Home
                posts={this.props.posts}
                isFetching={this.props.isFetching}
                switchSection={this.props.switchSection}
                isFetchingToggle={this.props.isFetchingToggle}
                setPosts={this.props.setPosts}
                updateSlider={this.props.updateSlider}
                getPosts={getPosts}
            />
        )

    }
}



let mapStateToProps = (state) => {
    return {
        posts: state.Home.posts.map((post, i) => <div key={i} className={stylesheet.item}><Post content={post.content} /></div>),
        isFetching: state.CommonElements.isFetching,
        startCount: state.Home.startCount
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
        updateSlider
    }
)(HomeAPIContainer)


export default HomeContainer;