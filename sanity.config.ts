import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import {vercelDeployTool} from 'sanity-plugin-vercel-deploy'

const devOnlyPlugins = [getStartedPlugin()]

const projectId = 'va7p5ydh'
const dataset = 'production'

export default defineConfig({
  name: 'default',

  projectId,
  dataset,

  plugins: [deskTool(), vercelDeployTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})
