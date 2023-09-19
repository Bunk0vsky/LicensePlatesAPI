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
          {title: 'Reszta Świata', value: 'Reszta Świata'},
          {title: 'Zestawy tablic', value: 'Zestawy tablic'},
          {title: 'Ramki i tab.motocyklowe', value: 'Ramki'},
        ],
      },
    },
  ],
}
