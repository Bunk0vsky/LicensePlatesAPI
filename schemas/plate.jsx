import {defineConfig} from 'sanity'

export default defineConfig({
  name: 'plate',
  type: 'document',
  title: 'Tablica rejestracyjna',
  preview: {
    select: {
      title: 'plateId',
      state: 'state',
      country: 'country',
    },
    prepare: ({state, country, title}) => {
      return {
        subtitle: state ? state : country,
        title: title ? title : `Brak ID dla: ${country}`,
      }
    },
  },
  fields: [
    {
      name: 'plateId',
      type: 'string',
      title: 'nr ID',
    },
    {
      name: 'country',
      type: 'string',
      title: 'Kraj',
      options: {
        list: [
          {title: 'Stany Zjednoczone', value: 'Stany Zjednoczone'},
          {title: 'Meksyk', value: 'Meksyk'},
          {title: 'Kanada', value: 'Kanada'},
          {title: 'Reszta Świata', value: 'Reszta Świata'},
          {title: 'Zestawy tablic', value: 'Zestawy tablic'},
          {title: 'Ramki i tab.motocyklowe', value: 'Ramki'},
          {title: 'Inne kategorie', value: 'Inne'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'state',
      type: 'string',
      title: 'Stan',
      options: {
        list: [
          {title: 'Alabama', value: 'Alabama'},
          {title: 'Alaska', value: 'Alaska'},
          {title: 'Arizona', value: 'Arizona'},
          {title: 'Arkansas', value: 'Arkansas'},
          {title: 'Connecticut', value: 'Connecticut'},
          {title: 'Dakota Południowa', value: 'South Dakota'},
          {title: 'Dakota Północna', value: 'North Dakota'},
          {title: 'Delaware', value: 'Delaware'},
          {title: 'Floryda', value: 'Florida'},
          {title: 'Georgia', value: 'Georgia'},
          {title: 'Hawaje', value: 'Hawaii'},
          {title: 'Idaho', value: 'Idaho'},
          {title: 'Illinois', value: 'Illinois'},
          {title: 'Indiana', value: 'Indiana'},
          {title: 'Iowa', value: 'Iowa'},
          {title: 'Kalifornia', value: 'California'},
          {title: 'Kansas', value: 'Kansas'},
          {title: 'Karolina Południowa', value: 'South Carolina'},
          {title: 'Karolina Północna', value: 'North Carolina'},
          {title: 'Kentucky', value: 'Kentucky'},
          {title: 'Kolorado', value: 'Colorado'},
          {title: 'Luizjana', value: 'Louisiana'},
          {title: 'Maine', value: 'Maine'},
          {title: 'Maryland', value: 'Maryland'},
          {title: 'Massachusetts', value: 'Massachusetts'},
          {title: 'Michigan', value: 'Michigan'},
          {title: 'Minnesota', value: 'Minnesota'},
          {title: 'Missisipi', value: 'Missisipi'},
          {title: 'Missouri', value: 'Missouri'},
          {title: 'Montana', value: 'Montana'},
          {title: 'Nebraska', value: 'Nebraska'},
          {title: 'Nevada', value: 'Nevada'},
          {title: 'New Hampshire', value: 'New Hampshire'},
          {title: 'New Jersey', value: 'New Jersey'},
          {title: 'Nowy Jork', value: 'New York'},
          {title: 'Nowy Meksyk', value: 'New Mexico'},
          {title: 'Ohio', value: 'Ohio'},
          {title: 'Oklahoma', value: 'Oklahoma'},
          {title: 'Oregon', value: 'Oregon'},
          {title: 'Pensylwania', value: 'Pennsylvania'},
          {title: 'Rhode Island', value: 'Rhode Island'},
          {title: 'Teksas', value: 'Texas'},
          {title: 'Tennessee', value: 'Tennessee'},
          {title: 'Utah', value: 'Utah'},
          {title: 'Vermont', value: 'Vermont'},
          {title: 'Waszyngton', value: 'Washington'},
          {title: 'Wirginia', value: 'Virginia'},
          {title: 'Wirginia Zachodnia', value: 'West Virginia'},
          {title: 'Wisconsin', value: 'Wisconsin'},
          {title: 'Wyoming', value: 'Wyoming'},
          {title: 'Dystrykt Kolumbii', value: 'District of Columbia'},
          {title: 'Kanada', value: 'Canada'},
          {title: 'Meksyk', value: 'Mexico'},
        ],
      },
      validation: (Rule) =>
        Rule.custom((state, context) => {
          if (context.document.country === 'Stany Zjednoczone' && !state) {
            return 'Wymagany wybór stanu w przypadku Stanów Zjednoczonych'
          } else {
            return true
          }
        }),
      hidden: ({document}) => document?.country !== 'Stany Zjednoczone',
    },
    {
      name: 'sizeLength',
      type: 'number',
      title: 'Długość',
      options: {
        list: [{title: 30, value: 30}],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sizeWidth',
      type: 'number',
      title: 'Szerokość',
      options: {
        list: [{title: 15, value: 15}],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'year',
      type: 'number',
      title: 'Rok',
      validation: (Rule) => Rule.required().min(1800),
    },

    {
      name: 'condition',
      type: 'string',
      title: 'Stan tablicy',
      options: {
        list: [
          {title: 'b.dobry', value: 'Bardzo dobry'},
          {title: 'dobry', value: 'Dobry'},
          {title: 'dostateczny', value: 'Dostateczny'},
          {title: 'słaby', value: 'Słaby'},
          {title: 'roadkill', value: 'Roadkill'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'src',
      type: 'file',
      title: 'Zdjęcie',
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Tytuł (Jeśli Reszta Świata, Zestawy i inne...)',

      validation: (Rule) =>
        Rule.custom((alt, context) => {
          const choices = ['Reszta Świata', 'Ramki', 'Zestawy tablic', 'Inne']
          if (choices.includes(context.document.country) && !alt) {
            return 'Wymagany tytuł w przypadku wyboru Reszta Świata, Ramki, Inne kategorie...'
          } else {
            return true
          }
        }),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Cena',
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'isPromo',
      type: 'boolean',
      title: 'Czy jest w promocji?',
    },
    {
      name: 'oldPrice',
      type: 'number',
      title: 'Stara cena',
      validation: (Rule) =>
        Rule.custom((oldPrice, context) => {
          if (context.document.isPromo && !oldPrice) {
            return 'Wymagana poprzednia cena w przypadku promocji'
          } else {
            return true
          }
        }).min(1),
      hidden: ({document}) => !document?.isPromo,
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
})
