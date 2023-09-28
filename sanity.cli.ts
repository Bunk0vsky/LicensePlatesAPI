import {defineCliConfig} from 'sanity/cli'

const projectId = 'va7p5ydh'
const dataset = 'production'

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  project: {
    basePath: '/',
  },
})
