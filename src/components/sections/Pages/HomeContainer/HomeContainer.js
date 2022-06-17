import React from 'react'
import { setPosts, switchSection } from '../../../../redux/HomeReducer'
import { isFetchingToggle } from '../../../../redux/CommonElementsReducer'
import Post from '../ProfileContainer/Profile/Post/Post'
import Home from './Home/Home'
import { connect } from 'react-redux'
import * as axios from 'axios'


class HomeAPIContainer extends React.Component {

    componentDidMount() {

        // load data at the start from db.json

        this.props.isFetchingToggle(true)

        axios
            .get("http://localhost:3001/posts")
            .then(response => {
                this.props.isFetchingToggle(false)
                this.props.setPosts(response.data)
            });
    }


    render() {

        return (
            <Home
                posts={this.props.posts}
                isFetching={this.props.isFetching}
                switchSection={this.props.switchSection}
                isFetchingToggle={this.props.isFetchingToggle}
                setPosts={this.props.setPosts}
            />
        )

    }
}



let mapStateToProps = (state) => {
    return {
        posts: state.Home.posts.map((post, i) => <Post key={i} text={post.text} />).reverse(),
        isFetching: state.CommonElements.isFetching
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
        setPosts
    }
)(HomeAPIContainer)


export default HomeContainer;