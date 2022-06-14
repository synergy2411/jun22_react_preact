import { useEffect, useState } from "react";
import axios from 'axios';

const UseEffectDemo = () => {

    const [bool, setBool] = useState(false);
    const [counter, setCounter] = useState(0);
    const [username, setUsername] = useState('');
    const [repos, setRepos] = useState([])

    // useEffect(() => {
    //     console.log("Use effect works")
    // })
    // useEffect(() => {
    //     console.log("Use effect works with empty dependencies")
    // }, [])
    // useEffect(() => {
    //     console.log("Use effect works with some dependencies")
    // }, [counter])
    // useEffect(() => {
    //     console.log("Use effect works with some dependencies and Cleanup function")

    //     return () => {
    //         console.log("Clean up")
    //     }

    // }, [counter])


    useEffect(() => {
        let notifier = setTimeout(() => {
            axios.get(`https://api.github.com/users/${username}/repos`)
            .then(response => setRepos(response.data))
            .catch(console.log)
        }, 1000)
        return () => {
            clearTimeout(notifier)
        }
    }, [username])

    return (
        <>
            <p>Use effect in action...</p>
            <form>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </form>
            <button onClick={() => setBool(!bool)}>Change Boolean</button>
            <button onClick={() => setCounter(prevState => prevState + 1)}>Change Counter</button>
            <hr />
            <ul>
            {repos.map(repo => <li>{repo.name}</li>)}
            </ul>
        </>
    )
}

export default UseEffectDemo;