export function getLanguage(state) {
  console.log(state)
  return Object.keys(state.language) ? state.language : 'vn';
}
