import {Container} from './components/Container';
import {Header} from './components/Header';
import {Search} from './components/Search';
import {UserCard} from './components/UserCard';
import {DefaultUser} from './mock'
import {useState} from 'react';
import {GitHubError, GithubUser, LocalGithubUser} from './types';
import {isGitHubUser} from './utils/typeGuards';
import {extractLocalUser} from './utils/extract-local-user';

const baseUrl = `https://api.github.com/users/`

function App() {
    const [user, setUser] = useState<LocalGithubUser | null>(DefaultUser)


    const fetchUser = async (username:string) => {
        const url = baseUrl + username
        const res = await fetch(url)
        const user = await res.json() as GithubUser | GitHubError

        if (isGitHubUser(user)) {
            setUser(extractLocalUser(user))
        } else {
            setUser(null)
        }
    }


    return (
        <Container>
            <Header/>
            <Search hasError={!user} onSubmit={fetchUser}/>
            {user &&
                <UserCard {...user}/>
            }
        </Container>
    );
}

export default App;
