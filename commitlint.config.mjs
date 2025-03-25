const config = {
  extends: ['@commitlint/config-conventional'],
  ignores: [(commit) => commit === ''],
  defaultIgnores: true,
}

export default config
