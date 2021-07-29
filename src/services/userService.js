import axios from 'axios';
import * as Constants from '../constants.js';

// TODO log out method

async function logIn(username, password) {
    const response = await axios.post(`${Constants.BASE_URL}/user/login`, {
        username,
        password
    });

    if (response.status === 200) {
        return {
            status: true,
            tokens: {
                accessToken: response.data.accessToken,
                refreshToken: response.data.refreshToken,
            }
        };

    } else {
        // TODO Error modal, if false returned
        return { status: false };
    };

}

async function syncLoggedIn({ accessToken, refreshToken }) {
    const response = await axios.post(`${Constants.BASE_URL}/user/token`, {
        accessToken,
        refreshToken
    });

    if (response.status === 200) {
        return {
            status: true,
            tokens: {
                accessToken: response.data.accessToken,
                refreshToken: response.data.refreshToken,
            }
        };
    } else {
        // TODO Error modal, if false returned
        return { status: false };
        // 
    }
}

export {
    syncLoggedIn,
    logIn
};
