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
          {title: 'Bdb', value: 'Bardzo dobry'},
          {title: 'Db', value: 'Dobry'},
          {title: 'Dst', value: 'Dostateczny'},
        ], // <-- predefined values
      },
    },
  ],
}
