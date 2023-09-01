export default {
  name: 'width',
  title: 'Szerokość',
  type: 'document',
  fields: [
    {
      title: 'Szerokość',
      name: 'name',
      type: 'number',

      options: {
        list: [{title: 15, value: 15}], // <-- predefined values
      },
    },
  ],
}
