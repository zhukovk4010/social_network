import {rerenderApp} from './../render'

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Где деньги, Лебовски?', likes: 20 },
            { id: 2, message: 'Займи косарь', likes: 23 }
        ]
    },
    dialogsPage: {
        dialogs: [
            {
                id: 1,
                name: 'Alina',
                avatarUrl: 'https://sun1-26.userapi.com/s/v1/ig2/A_f7YfWallfKEiKTZqyUsdm0EXxa89Wf_2Mhv2KUj-slsohWJKrz-C4ri1RImm8ne8eT0pfJkENZus-YysLLpDPY.jpg?size=200x200&quality=95&crop=421,447,1071,1071&ava=1'
            },
            {
                id: 2,
                name: 'Vildan',
                avatarUrl: 'https://sun1-47.userapi.com/s/v1/if1/mDkoTQ8qfRWu8qJiSpoHREBDP_z0GYA1rZEST9JsJtdcZoOnvIeUHbF1UVVDVKH-A4EO9hHT.jpg?size=200x200&quality=96&crop=162,212,525,525&ava=1'
            },
            {
                id: 3,
                name: 'Matvey',
                avatarUrl: 'https://vk.com/images/camera_200.png'
            },
            {
                id: 4,
                name: 'Isma',
                avatarUrl: 'https://sun1-15.userapi.com/s/v1/ig2/T6qPcumwuDS6T8FqpzOlERllJrg-hcnFicjSQrx553JB-yqBY-sp2WyWD3Gdftl5vitzV-UeAjiWMkMG6HIMnTVG.jpg?size=200x200&quality=95&crop=390,193,1538,1538&ava=1'
            },
            {
                id: 5,
                name: 'Vadik',
                avatarUrl: 'https://sun1-15.userapi.com/s/v1/ig2/T6qPcumwuDS6T8FqpzOlERllJrg-hcnFicjSQrx553JB-yqBY-sp2WyWD3Gdftl5vitzV-UeAjiWMkMG6HIMnTVG.jpg?size=200x200&quality=95&crop=390,193,1538,1538&ava=1'
            }
        ],
        messages: [
            { id: 1, message: 'Привет', },
            { id: 2, message: 'Как дела?', },
            { id: 3, message: 'я нарик', },
            { id: 4, message: 'верни бабки', }
        ]
    },
    newsPage: {

    },
    musicPage: {

    },
    settingsPage: {

    },
    menu: {
        friends: [
            {
                id: 1,
                name: 'Alina',
                avatarUrl: 'https://sun1-26.userapi.com/s/v1/ig2/A_f7YfWallfKEiKTZqyUsdm0EXxa89Wf_2Mhv2KUj-slsohWJKrz-C4ri1RImm8ne8eT0pfJkENZus-YysLLpDPY.jpg?size=200x200&quality=95&crop=421,447,1071,1071&ava=1'
            },
            {
                id: 2,
                name: 'Vildan',
                avatarUrl: 'https://sun1-47.userapi.com/s/v1/if1/mDkoTQ8qfRWu8qJiSpoHREBDP_z0GYA1rZEST9JsJtdcZoOnvIeUHbF1UVVDVKH-A4EO9hHT.jpg?size=200x200&quality=96&crop=162,212,525,525&ava=1'
            },
            {
                id: 3,
                name: 'Matvey',
                avatarUrl: 'https://vk.com/images/camera_200.png'
            },
            {
                id: 4,
                name: 'Isma',
                avatarUrl: 'https://sun1-15.userapi.com/s/v1/ig2/T6qPcumwuDS6T8FqpzOlERllJrg-hcnFicjSQrx553JB-yqBY-sp2WyWD3Gdftl5vitzV-UeAjiWMkMG6HIMnTVG.jpg?size=200x200&quality=95&crop=390,193,1538,1538&ava=1'
            },
            {
                id: 5,
                name: 'Vadik',
                avatarUrl: 'https://sun1-15.userapi.com/s/v1/ig2/T6qPcumwuDS6T8FqpzOlERllJrg-hcnFicjSQrx553JB-yqBY-sp2WyWD3Gdftl5vitzV-UeAjiWMkMG6HIMnTVG.jpg?size=200x200&quality=95&crop=390,193,1538,1538&ava=1'
            }
        ]
    }
}

export let addPost = (postMessage) => {
    let postElements = {
        id: 5,
        message: postMessage,
        likes: 0
    }

    state.profilePage.posts.push(postElements);
    rerenderApp(state, addPost);
}


export default state;