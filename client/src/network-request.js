const api = `${window.location.origin}/api`

export const getfromAPI = table => fetch(`${api}/${table}`)
  .then(res => res.json())