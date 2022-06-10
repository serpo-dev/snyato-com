import React from 'react';
import { currentValueOfTextArea, oneByOneCharachtersEnteringActionCreator, addNewPostActionCreator } from "../../../redux/ProfileReducer";
import Post from './Profile/Post/Post'
import Profile from './Profile/Profile'


const ProfileContainer = (props) => {

    // convert an JS to the JSX

    const posts = props.store.getState().Profile.posts.map((post, i) => <Post key={i} text={post.text} />).reverse();

    const data = {
        posts: posts,
        currentValueOfTextArea: currentValueOfTextArea
    }


    // get current value of the text area, give it to the action creator and then to the dispatch

    const callAddNewPostActionCreator = (currentValueOfTextArea) => {
        props.store.dispatch(addNewPostActionCreator(currentValueOfTextArea));
    };

    const callOneByOneCharachtersEnteringActionCreator = (currentValueOfTextArea) => {
        props.store.dispatch(oneByOneCharachtersEnteringActionCreator(currentValueOfTextArea));
    };

    const callbacks = {
        callAddNewPostActionCreator: callAddNewPostActionCreator,
        callOneByOneCharachtersEnteringActionCreator: callOneByOneCharachtersEnteringActionCreator
    }


    return (
        <Profile
            data={data}
            callbacks={callbacks}
        />
    )
}

export default ProfileContainer;