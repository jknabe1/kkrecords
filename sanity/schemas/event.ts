export default {
    name: 'event',
    type: 'document',
    title: 'Event',
    fields: [
      {
        name: 'event',
        type: 'string',
        title: 'Namm på event',
      },
      {
        name: 'datum',
        type: 'string',
        title: 'Datum',
      },
      {
        name: 'type',
        type: 'string',
        title: 'Typ av event (konsert, standup, etc)',
      },
      {
        name: 'venue',
        type: 'string',
        title: 'Venue',
      }
    ],
  }