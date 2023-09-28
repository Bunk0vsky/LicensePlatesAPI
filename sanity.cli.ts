import {defineCliConfig} from 'sanity/cli'

const projectId = import.meta.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = import.meta.env.NEXT_PUBLIC_SANITY_DATASET

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  project: {
    basePath: '/',
  },
})
