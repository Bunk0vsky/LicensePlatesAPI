export default {
  name: 'length',
  title: 'Długość',
  type: 'document',
  fields: [
    {
      title: 'Długość',
      name: 'name',
      type: 'number',

      options: {
        list: [{title: 30, value: 30}], // <-- predefined values
      },
    },
  ],
}
