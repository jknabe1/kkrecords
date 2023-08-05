export default {
    name: 'information',
    type: 'document',
    title: 'Information',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'excerpt',
        type: 'string',
        title: 'Excerpt',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'title',
        },
      },
      {
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [
          {
            type: 'block',
          },
          {
            type: 'image',
            fields: [
              {
                type: 'text',
                name: 'alt',
                title: 'Alternative Text',
              },
            ],
          },
        ],
      },
    ],
  }