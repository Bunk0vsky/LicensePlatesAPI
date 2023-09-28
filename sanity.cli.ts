import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'va7p5ydh',
    dataset: 'production',
  },
  project: {
    basePath: '/studio',
  },
})
