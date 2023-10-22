import dotenv from "dotenv";

dotenv.config();

const consumer_key = process.env.TWITTER_CONSUMER_KEY;
const consumer_secret = process.env.TWITER_CONSUMER_SECRET;
const access_token_key = process.env.TWITTER_ACCESS_TOKEN_KEY;
const access_token_secret = process.env.TWITTER_ACCESS_TOKEN_SECRET;

const apiUrl = `https://api.twitter.com/2/users/me`;

//we can generate this data using the OAuth lib but for a simple theste this is enough
const oauthHeader = `OAuth oauth_consumer_key="${consumer_key}", oauth_token="${access_token_key}", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1697987575", oauth_nonce="LJ1XapsISlH", oauth_version="1.0", oauth_signature="NS2sLR1WAMB%2FRT404I89JnnBLAs%3D"`;

const headers = {
    Authorization: oauthHeader,
};

async function getUser(){
    try{
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: headers,
        });
    
        let body = await response.json();
        console.log(body.data);  
    }
    catch(err){
        console.log(err);
    }
    
}

getUser();

