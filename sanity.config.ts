import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas/schema';

export default defineConfig({
  name: 'sample',
  projectId: import.meta.env.SANITY_STUDIO_API_PROJECT_ID,
  dataset: import.meta.env.SANITY_STUDIO_API_DATASET,
  plugins: [deskTool()],
  schema: { types: schemaTypes },
});
