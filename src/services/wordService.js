import axios from 'axios';
import * as Constants from '../constants.js';
import { syncLoggedIn } from './userService.js';

export async function getWord(word, tokens) {
    const response = await axios.get(`${Constants.BASE_URL}/est/get/${word}`, {
        headers: {
            'authorization': `Bearer ${tokens.accessToken}`
        }
    });
    let data = response.data;

    if (response.status === 200) {
        return data[0];
    } else if (response.status === 403) {
        console.log(data.message);
        await syncLoggedIn(tokens);
        await getWord(word, tokens);
    } else if (response.statusCode == 401) {
        console.log(`status: ${response.status}, You are unauthorized to view it, Logging out.` +
            `\nerror: ${data.message}`);
        // log out method
    } else if (response.status === 404) {
        console.log(`${word} was not found: status response.status`);
    } else {
        console.log(`else, status: ${response.status}`);
    }
}