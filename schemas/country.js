export default {
  name: 'country',
  title: 'Kraj',
  type: 'document',
  fields: [
    {
      title: 'Nazwa kraju',
      name: 'name',
      type: 'string',
      options: {
        list: [
          {title: 'Stany Zjednoczone', value: 'Stany Zjednoczone'},
          {title: 'Meksyk', value: 'Meksyk'},
          {title: 'Kanada', value: 'Kanada'},
        ],
      },
    },
  ],
}
