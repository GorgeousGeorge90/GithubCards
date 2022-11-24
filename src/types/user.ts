export type LocalGithubUser = {
    login:string,
    id: number,
    avatar: string,
    name: string,
    blog: string,
    location: string,
    bio: string,
    twitter: string,
    repos: number,
    followers: number,
    following: number,
    created: string,
}

export type GithubUser = {
    login:string,
    id: number,
    avatar_url: string,
    name: string,
    blog: string,
    location: string,
    bio: string,
    twitter_account: string,
    public_repos: number,
    followers: number,
    following: number,
    created_at: string,
}

export type GitHubError = {
    message: string,
    document_url: string,
}