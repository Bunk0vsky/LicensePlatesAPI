export default {
  name: 'delivery',
  title: 'Dostawa',
  type: 'document',
  fields: [
    {
      title: 'Opcja dostawy',
      name: 'options',
      type: 'string',
      options: {
        list: [
          {title: 'Wpłata na konto', value: 'wpłata na konto'},
          {title: 'Pobranie pocztowe', value: 'pobranie pocztowe'},
          {title: 'Pobranie paczkomat', value: 'pobranie paczkomat'},
          {title: 'Wpłata na konto paczkomat', value: 'wpłata na konto paczkomat'},
        ],
      },
    },
    {
      title: 'Koszt dostawy',
      name: 'price',
      type: 'number',
    },
  ],
}
