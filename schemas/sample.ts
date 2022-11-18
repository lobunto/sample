import { defineField, defineType } from 'sanity';

export const sample = defineType({
  name: 'sample',
  title: 'Sample',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'block' }, { type: 'imageBlock' }],
    }),
  ],
});
