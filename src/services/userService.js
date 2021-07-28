import store from '../store/index.js';
import axios from 'axios';
import * as Constants from '../constants.js';

// TODO log out method

export async function logIn(username, password) {
    const response = await axios.post(`${Constants.BASE_URL}/user/login`, {
        username,
        password
    });

    if (response.status === 200) {
        store._actions.LOGGED_IN_SET[0]({
            accessToken: response.data.accessToken,
            refreshToken: store.getters.refreshToken,
        });
        return true;
    } else {
        // TODO Error modal
        alert(`We have an error: ${response.data}`);
        return false;
    }
}

export async function syncLoggedIn() {
    const response = await axios.post(`${Constants.BASE_URL}/user/token`, {
        accessToken: store.getters.getAccessToken,
        refreshToken: store.getters.getRefreshToken
    });
    // TODO store._actions.LOGGED_IN_SET[0] - is [0] necessary?
    if (response.status === 200) {
        store._actions.LOGGED_IN_SET[0]({
            accessToken: response.data.accessToken,
            refreshToken: store.getters.refreshToken,
        });
    } else {
        store._actions.LOGGED_IN_SET[0](false);
    }
}


// const { syncLoggedIn } = require("../services/userService.js");
// await syncLoggedIn();
