import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001/'
});


export const ProfileAPI = {
    getPosts() {
        return (
            instance
                .get('posts')
                .then(response => response.data)
        )
    }
};

export const InboxAPI = {
    getMessages() {
        return (
            instance
                .get('messages')
                .then(response => response.data)
        )
    }
}

export const SliderAPI = {
    getPosts(startCount, endCount) {
        return (
            instance
            .get(`posts?_start=${startCount}&_end=${endCount}`)
            .then(response => response.data)
        )
    }
};