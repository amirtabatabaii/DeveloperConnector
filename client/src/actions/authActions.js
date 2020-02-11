import {
    TEST_DISPACH
} from './types'


// Register User
export const registerUser = (userData) => {
    return ({
        type: TEST_DISPACH,
        payload: userData
    })
};