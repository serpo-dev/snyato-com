import React from 'react'
import { setPosts, switchSection } from '../../../../redux/HomeReducer'
import { isFetchingToggle } from '../../../../redux/CommonElementsReducer'
import Post from './Profile/Post/Post'
import Home from './Home/Home'
import { connect } from 'react-redux'
import * as axios from 'axios'


class ProfileAPIContainer extends React.Component {

    componentDidMount() {

        // load data at the start from db.json

        this.props.callIsFetchingToggle(true)

        axios
            .get("http://localhost:3001/posts")
            .then(response => {
                this.props.callSetPosts(response.data);
                this.props.callIsFetchingToggle(false)
            });
    }


    render() {

        return (
            <Home
                posts={this.props.posts}
                isFetching={this.props.isFetching}
                callSwitchSection={this.props.callSwitchSection}
                callIsFetchingToggle={this.props.callIsFetchingToggle}
                callSetPosts={this.props.callSetPosts}
            />
        )

    }
}



let mapStateToProps = (state) => {
    return {
        posts: state.Profile.posts.map((post, i) => <Post key={i} text={post.text} />).reverse(),
        isFetching: state.CommonElements.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        callSwitchSection: (sectionName) => {
            dispatch(switchSection(sectionName))
        },
        callIsFetchingToggle: (isFetching) => {
            dispatch(isFetchingToggle(isFetching))
        },
        callSetPosts: (newPosts) => {
            dispatch(setPosts(newPosts))
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileAPIContainer)


export default ProfileContainer;