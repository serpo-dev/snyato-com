import React from 'react';
import { oneByOneCharachtersEnteringActionCreator, addNewPostActionCreator, setPostsActionCreator } from "../../../redux/ProfileReducer";
import Post from './Profile/Post/Post'
import Profile from './Profile/Profile'
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
    return {
        posts: state.Profile.posts.map((post, i) => <Post key={i} text={post.text} />).reverse(),
        currentValueOfTextArea: state.Profile.currentValueOfTextArea
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        callAddNewPostActionCreator: () => {
            dispatch(addNewPostActionCreator())
        },
        callOneByOneCharachtersEnteringActionCreator: (desiredValue) => {
            dispatch(oneByOneCharachtersEnteringActionCreator(desiredValue))
        },
        callSetPostsActionCreator: (setPosts) => {
            dispatch(setPostsActionCreator(setPosts))
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)


export default ProfileContainer;