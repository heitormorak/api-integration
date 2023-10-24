import Twitter from 'twitter';
import { TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET, TWITTER_ACCESS_TOKEN_KEY, TWITTER_ACCESS_TOKEN_SECRET } from '../tokens.js';

const consumer_key = TWITTER_CONSUMER_KEY;
const consumer_secret = TWITTER_CONSUMER_SECRET;
const access_token_key = TWITTER_ACCESS_TOKEN_KEY;
const access_token_secret = TWITTER_ACCESS_TOKEN_SECRET;

const apiUrl = `https://api.twitter.com/2/users/me`;

//we can generate this data using the OAuth lib but just for a simple test this is enough
const oauthHeader = `OAuth oauth_consumer_key="${consumer_key}", oauth_token="${access_token_key}", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1697987575", oauth_nonce="LJ1XapsISlH", oauth_version="1.0", oauth_signature="NS2sLR1WAMB%2FRT404I89JnnBLAs%3D"`;
//const oauthHeader = `OAuth oauth_consumer_key="WyjXeChqeI6ERYDhkhKn7b1yn", oauth_token="1525496991945465862-CHGHlaakYn2V6rm4Z77jKuWElVJ9Al", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1697987575", oauth_nonce="LJ1XapsISlH", oauth_version="1.0", oauth_signature="NS2sLR1WAMB%2FRT404I89JnnBLAs%3D"`;
const headers = {
    Authorization: oauthHeader,
};

var client = new Twitter({
    consumer_key: consumer_key,
    consumer_secret: consumer_secret,
    access_token_key: access_token_key,
    access_token_secret: access_token_secret
});

var params = {screen_name: 'nodejs'};

// client.get('2/users/me', function(error, tweets, response) {
//     if (!error) {
//       console.log(tweets);
//     }
//     console.log(response);
// });


export async function getTwitterUser(){
    try{
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: headers,
        });
        console.log(response)
        let body = await response.json();
        console.log(body.data);  
    }
    catch(err){
        console.log(err);
    }
}

