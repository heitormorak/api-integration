import dotenv from 'dotenv';

dotenv.config();

export const TWITTER_CONSUMER_KEY= process.env.TWITTER_CONSUMER_KEY;
export const TWITTER_CONSUMER_SECRET = process.env.TWITTER_CONSUMER_KEY;
export const TWITTER_BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;
export const TWITTER_ACCESS_TOKEN_KEY = process.env.TWITTER_ACCESS_TOKEN_KEY;
export const TWITTER_ACCESS_TOKEN_SECRET = process.env.TWITTER_ACCESS_TOKEN_KEY;

export const GITHUB_AUTH = process.env.GITHUB_AUTH;

export const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;