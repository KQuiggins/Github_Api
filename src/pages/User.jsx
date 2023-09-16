import { useEffect, useContext } from "react"
import GithubContext from "../context/github/GitHubContext"
import { useParams } from "react-router-dom";

const Users = () => {

  const {getUser, user} = useContext(GithubContext);
  const params = useParams();


  useEffect(() => {
    getUser(params.login);
    //getUserRepos(params.login)
  }, [])

  return (
    <div>Users</div>
  )
}

export default Users