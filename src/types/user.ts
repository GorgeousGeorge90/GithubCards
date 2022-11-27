export type LocalGithubUser = {
    login:string,
    id: number,
    avatar: string,
    name: string,
    blog: string,
    location: string,
    bio: string,
    twitter: string | null,
    repos: number,
    followers: number,
    following: number,
    created: string,
    company: string | null,
}

export type GithubUser = {
    login:string,
    id: number,
    avatar_url: string,
    name: string,
    blog: string,
    location: string,
    bio: string,
    twitter_username: string | null,
    public_repos: number,
    followers: number,
    following: number,
    created_at: string,
    company: string,
}

export type GitHubError = {
    message: string,
    document_url: string,
}