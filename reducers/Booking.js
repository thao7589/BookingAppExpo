import * as constants from '../constants';
import { UPDATE_FIELD } from '../actions/types';
import { AsyncStorage } from 'react-native';

const initialState = {
    signedUp: false,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        logined: false
    },
    posts: [
        {
            "userId": 1,
            "postId": 1,
            "postType": 1,
            "title": "Sand Artists",
            "price": 100000,
            "img": "https://www.zestholidays.co.za/wp-content/uploads/2016/09/Most-Amazing-SAND-SCULPTURES.jpeg",
            "description": "Sand artists have been popular with corporate events since Ukraine’s Got Talent featured a female sand artist that took the internet by storm. These talented artists will perform custom made sand animations for a variety of corporate events. These shows have definite wow factor that will ensure your event is remembered!",
            "address": "137/12 Nguyen Van Troi, phuong 1, quan Tan Binh"

        },
        {
            "userId": 2,
            "postId": 2,
            "postType": 1,
            "title": "Birdcage Entertainment",
            "price": 100000,
            "img": "http://www.blackbirdcage.com/Black-Birdcage-Entertainment-Giant-Golden-Birdcage.jpg",
            "description": "Birdcage entertainers are ideal corporate entertainment especially if you don’t have time or the room for a large-scale production. Whatever the entertainers do from inside the birdcage elevates (literally) your entertainment.",
            "address": "137/12 Nguyen Van Troi, phuong 1, quan Tan Binh"

        },
        {
            "userId": 1,
            "postId": 3,
            "postType": 2,
            "title": "One Night in Paris NYE 2020",
            "price": 100000,
            "img": "https://myprivateparis.com/wp-content/uploads/2019/11/new-years-eve-paris-2020-2-1536x868.jpg",
            "description": "Looking to see in the New Year in style? 10, 9, 8, 7, 6, 5, 4, 3, 2, 1... 0: One Night in Paris at XU is ready to SHAKE! Join us for THE GREATEST NEW YEARS EVE PARTY IN XU, Leela Palace with an over a huge number of lucky partygoers coming together to celebrate in a luxurious NYE setting with Top Celebrity DJ's in the Line-up,... Head straight into 2020 with 5 hours of Non-Stop Party:",
            "address": "137/12 Nguyen Van Troi, phuong 1, quan Tan Binh"

        },
        {
            "userId": 1,
            "postId": 4,
            "postType": 2,
            "title": "Friday Bollywood",
            "price": 100000,
            "img": "https://postcard.news/wp-content/uploads/2017/03/bollywood.jpg",
            "description": "This Friday Bollywood and Punjabi Night with DJ's set fire to the stage with Bollywood and Punjabi music featuring a special Set you wouldn't want to miss it!",
            "address": "137/12 Nguyen Van Troi, phuong 1, quan Tan Binh"

        },
        {
            "userId": 1,
            "postId": 5,
            "postType": 1,
            "title": "Attendee Hall of Fame",
            "price": 100000,
            "img": "https://wrestlingnews.co/wp-content/uploads/2018/04/WWE-Hall-Of-Fame-2018.jpg",
            "description": "Attendee image galleries are fun entertainment for an area designed around waiting or networking. You can use serious corporate images that morph into funny ones in front of your eyes or use projection mapping to alter the images so that it appears their gaze is following attendees as the stroll past.",
            "address": "137/12 Nguyen Van Troi, phuong 1, quan Tan Binh"

        },
        {
            "userId": 1,
            "postId": 6,
            "postType": 2,
            "title": "Ladies nIght FT Sagar Drava",
            "price": 100000,
            "img": "https://storage.googleapis.com/ehimages/2019/11/24/img_e66524c281cdc73a11a8ea35cebd4986_1574582157875_processed_original.jpg",
            "description": "We making your Friday grand at the finest clubs in Koramangala; Drava; we are bringing out DJ Sagar   at the deck supported by the most talents chunks city Music monk  and for the ladies in  the house we provide you Free Drinks till 11 ",
            "address": "137/12 Nguyen Van Troi, phuong 1, quan Tan Binh"

        },
        {
            "userId": 1,
            "postId": 7,
            "postType": 1,
            "title": "Laughter Yoga and Humor Therapists",
            "price": 100000,
            "img": "http://www.strictly-stress-management.com/images/laughter-therapy.jpg",
            "description": "Laughter yoga will get your corporate group laughing their way out of a stressful situation. The difference between a humor therapist and a comedian is that the therapists often offer coping techniques for dealing with stress and sometimes share a story of their own difficulties and how humor helped them transcend those challenges.",
            "address": "137/12 Nguyen Van Troi, phuong 1, quan Tan Binh"

        },
        {
            "userId": 1,
            "postId": 8,
            "postType": 2,
            "title": "Friday Holly",
            "price": 100000,
            "img": "https://storage.googleapis.com/ehimages/2019/11/24/img_e66524c281cdc73a11a8ea35cebd4986_1574582157875_processed_original.jpg",
            "description": "Friday, Dec13th BORDERLESS Friday (Holly-Bollywood night) Ft the super talented indias top Bollywood dj DJ RITZEE",
            "address": "137/12 Nguyen Van Troi, phuong 1, quan Tan Binh"

        },
        {
            "userId": 1,
            "postId": 9,
            "postType": 1,
            "title": "Snow Fall",
            "price": 100000,
            "img": "https://dfwsnowparties.com/wp-content/uploads/2018/03/Throwing-a-Snow-Party-for-Adults.jpg",
            "description": "Snow falling can bring a romance and childlike wonder to any event, especially if it’s occurring in an unexpected area.",
            "address": "137/12 Nguyen Van Troi, phuong 1, quan Tan Binh"

        },
    ],
    viewPost: null,
    cart: {
        count: 0,
        list: []
    }
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'UPDATE_FIELD':
            return {
                ...state,
                [action.payload.key]: action.payload.value
            }
        case 'UPDATE_USER_FIELD':
            return {
                ...state,
                user: {
                    ...state.user,
                    [action.payload.key]: action.payload.value
                }
            }
        case 'LOGIN':
            let check = (state.user.email == constants.users.user.email && state.user.password == constants.users.user.pass);
            if(check) {
                _storeData = async () => {
                    try {
                      await AsyncStorage.setItem('email', state.user.email);
                      await AsyncStorage.setItem('password', state.user.password);
                    } catch (error) {
                      // Error saving data
                    }
                  };
            }
            return {
                ...state,
                user: {
                    ...state.user,
                    logined: check
                }
            };
        case 'LOGOUT':
            return {
                ...state,
                user: initialState.user
            };    
        case 'SIGNUP':
            check = (state.user.password == state.user.confirmPassword)
            return {
                ...state,
                signedUp: check
            };    
        case 'DELETE_POST':
            let deletedPost = state.posts.filter(post => post.id !== action.payload.id);
            return {
                ...state,
                posts: deletedPost
            };   
        case 'VIEW_POST_DETAIL':
            for(let i = 0; i < state.posts.length; i++) {
                if(state.posts[i].postId == action.payload.id) {
                    return {
                        ...state,
                        viewPost: state.posts[i]
                    };  
                }
            }
        case 'ADD_CART': 
            let list = state.cart.list;
            let count = state.cart.count;

            list.push(action.payload.post);
            count++;
            return {
                ...state,
                cart: {
                    count: count,
                    list: list
                }
            }    
        case 'HANDLE_NAVIGATION_LINK':
            break; 
        default:
            return {
                ...state
            };    
    }
} 