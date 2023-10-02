export const getData = async () => {
  const resp = await fetch(
    'https://api.github.com/repos/carlos8alb/FULLTIMEFORCE-interview/commits',
    { headers: { GITHUB_TOKEN: 'ghp_hPQ6LKhrLoO6vEW4i52VAHB62I1Ap12zyXN' } }
  )

  const data = await resp.json()
  return data
}
