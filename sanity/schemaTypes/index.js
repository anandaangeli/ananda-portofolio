import project from './project'

// Sanity v5 mengharapkan bentuk { types: [...] }.
// Objek inilah yang di-import sebagai `schema` di sanity.config.js.
export const schema = {
  types: [project],
}
