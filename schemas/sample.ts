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
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'imageBlock' }],
    }),
  ],
});
