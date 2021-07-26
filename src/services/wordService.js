import store from '../store/index.js';
import axios from 'axios';
import * as Constants from '../constants.js';
import { syncLoggedIn } from './userService.js';

export async function getWord(word) {
    const response = await axios.get(`${Constants.BASE_URL}/est/get/${word}`, {
        headers: {
            'authorization': `Bearer ${store.getters.getAccessToken}`
        }
    });
    let data = response.data;

    if (response.status === 200) {
        return data[0];
    } else if (response.status === 403) {
        console.log(data.message);
        await syncLoggedIn();
        await getWord(word);
    } else if (response.statusCode == 401) {
        console.log(`You are unauthorized to view it, Logging out.` +
            `\nerror: ${data.message}`);
        // log out method
    } else if (response.status === 404) {
        console.log(`${word} was not found`);
    } else {
        console.log('else');
    }
}