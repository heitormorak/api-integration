import express from 'express';
import { getGitHubUser, getGitHubUserRepos, postGitHubCreateRepo } from "../controllers/gitHubController.js";
import { getTwitterUser } from "../controllers/twitterController.js";

const router = express.Router();

router.get('/GitHubUser', getGitHubUser);
router.get('/GitHubUser/repos', getGitHubUserRepos);
router.post('/GitHub/repo', postGitHubCreateRepo);
router.get('/TwitterUser', getTwitterUser);

export default router;