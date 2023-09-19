export default {
  name: 'condition',
  title: 'Stan tablicy',
  type: 'document',
  fields: [
    {
      title: 'Kondycja tablicy',
      name: 'name',
      type: 'string',
      options: {
        list: [
          {title: 'b.dobry', value: 'Bardzo dobry'},
          {title: 'dobry', value: 'Dobry'},
          {title: 'dostateczny', value: 'Dostateczny'},
          {title: 'słaby', value: 'Słaby'},
          {title: 'roadkill', value: 'Roadkill'},
        ], // <-- predefined values
      },
    },
  ],
}
