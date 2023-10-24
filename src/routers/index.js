import express from 'express';
import { getGitHubUser, getGitHubUserRepos, postGitHubCreateRepo } from "../controllers/gitHubController.js";
import { getTwitterUser } from "../controllers/twitterController.js";

const router = express.Router();

router.get('/getGitHubUser', getGitHubUser);
router.get('/getGitHubUserRepos', getGitHubUserRepos);
router.post('/postGitHubCreateRepo', postGitHubCreateRepo);
router.get('/getTwitterUser', getTwitterUser);

export default router;