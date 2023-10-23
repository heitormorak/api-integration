import { Octokit } from "octokit";
import fetch from "node-fetch";

const octokit = new Octokit({ 
    request: {
        fetch: fetch,
    },        
    auth: process.env.GITHUB_AUTH,
});

export async function getGitHubUser(){
    try{
        const response = await octokit.request("GET /user", { });
        console.log(response.data)
    }catch(error){
        console.log(`Error: ${error}`);
    }
}

export async function getGitHubUserRepos(){
    try{
        const response = await octokit.request("GET /user/repos", {
            visibility: "public",
            affiliation: "owner",
        });
        console.log(response.data)
    }catch(error){
        console.log(`Error: ${error}`);
    }
}

export async function postGitHubCreateRepo(){
    try{
        await octokit.request('POST /user/repos', {
            name: 'Hello-World',
            description: 'This is your first repo!',
            homepage: 'https://github.com',
            'private': false,
            is_template: true,
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
          });
        }catch(error){
            console.log(`Error: ${error}`);
        }
}

getGitHubUser();
getGitHubUserRepos();