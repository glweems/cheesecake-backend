import Model from '../db';

export default class Event extends Model {
  title: string;

  date: string;

  street: string;

  address: {
    city: string;
    state: string;
    zip: number;
  };

  static tableName = 'events';

  static query(...args: any) {
    const query = super.query(...args);
    const formatEvent = (row: {
      title: string;
      date: string;
      street: string;
      city: string;
      state: string;
      zip: number;
    }) => ({
      title: row.title,
      date: row.date,
      address: {
        street: row.street,
        city: row.city,
        state: row.state,
        zip: row.zip
      }
    });
    const formatEvents = (rows: any[]) => rows.map(row => formatEvent(row));
    return query.runAfter((result: typeof Event[]) => {
      return formatEvents(result);
    });
  }
}
