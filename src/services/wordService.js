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

    switch (response.status) {
        case 404: {
            // BUG
            console.log(`${word} was not found: status response.status`);
            return false;
        }
        case 403: {
            console.log(data.message);
            await syncLoggedIn(tokens);
            await getWord(word, tokens);
            break;
        }
        case 401: {
            console.log(`status: ${response.status}, You are unauthorized to view it, Logging out.` +
                `\nerror: ${data.message}`);
            return false;
            // TODO #15 log out method
        }
        case 200: {
            return data[0];
        }
        default: {
            console.log(`else, status: ${response.status}`);
            return false;

        }
    }

}