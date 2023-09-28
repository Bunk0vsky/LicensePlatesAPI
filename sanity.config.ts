import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import {vercelDeployTool} from 'sanity-plugin-vercel-deploy'

const devOnlyPlugins = [getStartedPlugin()]

const title = import.meta.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Next.js Blog with Sanity.io'
const projectId = import.meta.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = import.meta.env.NEXT_PUBLIC_SANITY_DATASET

export default defineConfig({
  name: 'default',
  title,

  projectId,
  dataset,

  plugins: [deskTool(), vercelDeployTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})
