import React from 'react';
import { oneByOneCharachtersEnteringActionCreator, addNewPostActionCreator, setPostsActionCreator } from "../../../../redux/ProfileReducer";
import Post from './Profile/Post/Post'
import Profile from './Profile/Profile'
import { connect } from 'react-redux'
import * as axios from 'axios';


class ProfileAPIContainer extends React.Component {

    componentDidMount() {

        // load data at the start from db.json

        axios
            .get("http://localhost:3001/posts")
            .then(response => {
                this.props.callSetPostsActionCreator(response.data);
            });
    }


    render() {

        return (
            <Profile
                posts={this.props.posts}
                currentValueOfTextArea={this.props.currentValueOfTextArea}
                callAddNewPostActionCreator={this.props.callAddNewPostActionCreator}
                callOneByOneCharachtersEnteringActionCreator={this.props.callOneByOneCharachtersEnteringActionCreator}
                callSetPostsActionCreator={this.props.callSetPostsActionCreator}
            />
        )

    }
}



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

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileAPIContainer)


export default ProfileContainer;