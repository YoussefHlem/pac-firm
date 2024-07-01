import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'pac-firm',

  projectId: 'j40kvf3b',
  dataset: 'pac-firm-db',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
