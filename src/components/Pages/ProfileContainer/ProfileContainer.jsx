import React from 'react';
import { currentValueOfTextArea, oneByOneCharachtersEnteringActionCreator, addNewPostActionCreator } from "../../../redux/ProfileReducer";
import Post from './Profile/Post/Post'
import Profile from './Profile/Profile'
import StoreContext from '../../../StoreContext'


const ProfileContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                store => {

                    // convert an JS to the JSX

                    const posts = store.getState().Profile.posts.map((post, i) => <Post key={i} text={post.text} />).reverse();

                    const data = {
                        posts: posts,
                        currentValueOfTextArea: currentValueOfTextArea
                    }



                    // get current value of the text area, give it to the action creator and then to the dispatch

                    const callAddNewPostActionCreator = (currentValueOfTextArea) => {
                        store.dispatch(addNewPostActionCreator(currentValueOfTextArea));
                    };

                    const callOneByOneCharachtersEnteringActionCreator = (currentValueOfTextArea) => {
                        store.dispatch(oneByOneCharachtersEnteringActionCreator(currentValueOfTextArea));
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
            }
        </StoreContext.Consumer>
    )
}

export default ProfileContainer;