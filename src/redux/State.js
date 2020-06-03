let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi! How are you?', likesCount: 4},
            {id: 2, message: 'It is is my first post!', likesCount: 34},
            {id: 3, message: 'What is going on?', likesCount: 14}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Olegan', img: 'https://image.freepik.com/free-vector/_8169-228.jpg'},
            {id: 2, name: 'Petro', img: 'https://image.freepik.com/free-vector/gamer-youtuber-gaming-avatar-with-headphones-esport-logo_8169-260.jpg'},
            {id: 3, name: 'Sarmen', img: 'https://image.freepik.com/free-vector/pro-gamer-avatar-logo_71220-49.jpg'},
            {id: 4, name: 'Gogi', img: 'https://image.freepik.com/free-vector/_139366-185.jpg'},
            {id: 5, name: 'Dohod', img: 'https://image.freepik.com/free-vector/_10308-81.jpg'}
        ],
        messages: [
            {id: 1, message: 'Hello!'},
            {id: 2, message: 'Yo!'},
            {id: 3, message: 'Sorry'},
            {id: 4, message: 'Bye'},
            {id: 5, message: 'what?'}
        ]
    }
}
export let addPost = (postMessage) => {
    
    let newPost = {
        id: 4,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
}

export default state;

// props.state.dialogsPage.dialogs.map(())
// пример движения через пропсы