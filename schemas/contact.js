export default {
  name: 'contact',
  title: 'Kontakt',
  type: 'document',
  fields: [
    {
      name: 'street',
      title: 'Ulica',
      type: 'string',
    },
    {
      name: 'city',
      title: 'Miasto + Kod pocztowy',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Telefon',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Adres e-mail',
      type: 'string',
    },
  ],
}
