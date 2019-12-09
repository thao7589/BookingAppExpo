import * as constants from '../constants';
import { UPDATE_FIELD } from '../actions/types';

const initialState = {
    logined: false,
    signedUp: false,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    posts: [
        {
            "userId": 1,
            "id": 1,
            "title": "Post 01",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "userId": 2,
            "id": 2,
            "title": "Post 02",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "userId": 1,
            "id": 3,
            "title": "Post 03",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "userId": 1,
            "id": 4,
            "title": "Post 04",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "userId": 1,
            "id": 5,
            "title": "Post 05",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "userId": 1,
            "id": 6,
            "title": "Post 05",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'UPDATE_FIELD':
            return {
                ...state,
                [action.payload.key]: action.payload.value
            }
        case 'LOGIN':
            return {
                ...state,
                logined: true
            }
        case 'LOGIN':
                return {
                    ...state,
                    signedUp: true
                }    
        case 'DELETE_POST':
                let deletedPost = state.posts.filter(post => post.id !== action.payload.id)
                return {
                    ...state,
                    posts: deletedPost
                }    
        case 'HANDLE_NAVIGATION_LINK':
            break; 
        default:
            return {
                ...state
            }    
    }
} 