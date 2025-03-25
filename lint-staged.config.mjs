const config = {
  '*.{js,mjs,json,html}': ['prettier --write'],
  '*.{ts,tsx}': ['eslint --fix', 'prettier --parser=typescript --write'],
}
export default config
