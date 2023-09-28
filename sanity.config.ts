import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {previewUrl} from 'sanity-plugin-iframe-pane/preview-url'

const title = 'License Plates Admin Panel'

export default defineConfig({
  basePath: '/studio',
  projectId: 'va7p5ydh',
  dataset: 'production',
  title,
  schema: {
    types: schemaTypes,
  },
  plugins: [
    deskTool(),
    previewUrl({
      base: '/api/draft',
      urlSecretId: 'preview.secret',
    }),
    visionTool(),
  ],
})
