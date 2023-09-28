import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import {vercelDeployTool} from 'sanity-plugin-vercel-deploy'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'Panel admina',

  projectId: 'va7p5ydh',
  dataset: 'production',

  plugins: [deskTool(), vercelDeployTool(), visionTool(), getStartedPlugin()],

  schema: {
    types: schemaTypes,
  },
})
