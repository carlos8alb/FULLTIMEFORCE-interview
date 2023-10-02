const URL_REPOSITORY =
  'https://api.github.com/repos/carlos8alb/FULLTIMEFORCE-interview'
const URL_COMMITS =
  'https://api.github.com/repos/carlos8alb/FULLTIMEFORCE-interview/commits'
const GITHUB_TOKEN = 'ghp_hPQ6LKhrLoO6vEW4i52VAHB62I1Ap12zyXN'

export const getRepository = async () => {
  const resp = await fetch(URL_REPOSITORY, {
    headers: { GITHUB_TOKEN }
  })

  const repository = await resp.json()
  return repository
}

export const getCommits = async () => {
  const resp = await fetch(URL_COMMITS, {
    headers: { GITHUB_TOKEN }
  })

  const commits = await resp.json()
  return commits
}
