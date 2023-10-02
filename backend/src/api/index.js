import dotenv from 'dotenv'
dotenv.config()

const URL_REPOSITORY = process.env.URL_REPOSITORY
const URL_COMMITS = process.env.URL_COMMITS
const GITHUB_TOKEN = process.env.GITHUB_TOKEN

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
