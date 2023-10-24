import { Octokit } from "octokit";
import fetch from "node-fetch";
import { GITHUB_AUTH } from "../tokens.js"

const octokit = new Octokit({ 
    request: {
        fetch: fetch,
    },        
    auth: GITHUB_AUTH,
});

export async function getGitHubUser(){
    try{
        const response = await octokit.request("GET /user", { });
        const gitUser = {
            name: response.data.name,
            email: response.data.email,
            login: response.data.login,
            urlUser: response.data.url,
            repos: response.data.repos_url,    
        }  
        console.log(gitUser);
        return gitUser;
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
            response.data.forEach(repo => {
                console.log(repo.full_name)
            });
    }catch(error){
        console.log(`Error: ${error}`);
    }
}

export async function postGitHubCreateRepo(){
    try{
        const response = await octokit.request('POST /user/repos', {
            name: 'test',
            description: 'This a test repo!',
            homepage: 'https://github.com',
            'private': true,
            is_template: true,
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
          });        
            console.log('Repo created!')        
        }catch(error){
            console.log(`Error: ${error}`);
        }
}

