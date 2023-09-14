// schemas/plate.js
export default {
  name: 'plate',
  type: 'document',
  title: 'Tablica rejestracyjna',
  fields: [
    {
      name: 'plateId',
      type: 'number',
      title: 'nr ID',
    },
    {
      name: 'country',
      type: 'reference',
      title: 'Kraj',
      to: [{type: 'country'}],
    },
    {
      name: 'state',
      type: 'reference',
      title: 'Stan',
      to: [{type: 'state'}],
    },
    {
      name: 'sizeLength',
      type: 'number',
      title: 'Długość',
      options: {
        list: [{title: 30, value: 30}],
      },
    },
    {
      name: 'sizeWidth',
      type: 'number',
      title: 'Szerokość',
      options: {
        list: [{title: 15, value: 15}],
      },
    },
    {
      name: 'year',
      type: 'number',
      title: 'Rok',
    },

    {
      name: 'condition',
      type: 'string',
      title: 'Stan tablicy',
      options: {
        list: [
          {title: 'Bdb', value: 'Bardzo dobry'},
          {title: 'Db', value: 'Dobry'},
          {title: 'Dst', value: 'Dostateczny'},
        ],
      },
    },
    {
      name: 'src',
      type: 'file',
      title: 'Scieżka zdjęcia',
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Nazwa zdjęcia',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Cena',
    },
    {
      name: 'oldPrice',
      type: 'number',
      title: 'Stara cena',
    },
    {
      name: 'isPromo',
      type: 'boolean',
      title: 'Czy jest w promocji',
    },
  ],
  orderings: [
    {
      title: 'ID - rosnąco ',
      name: 'plateId',
      by: [{field: 'plateId', direction: 'asc'}],
    },
    {
      title: 'ID - malejąco ',
      name: 'plateId',
      by: [{field: 'plateId', direction: 'desc'}],
    },
    {
      title: 'Kraj - rosnąco ',
      name: 'country',
      by: [{field: 'country', direction: 'asc'}],
    },
    {
      title: 'Kraj - malejąco',
      name: 'country',
      by: [{field: 'country', direction: 'desc'}],
    },
    {
      title: 'Stan - rosnąco',
      name: 'state',
      by: [{field: 'state', direction: 'asc'}],
    },
    {
      title: 'Stan - malejąco',
      name: 'state',
      by: [{field: 'state', direction: 'desc'}],
    },
  ],
}
