import Model from '../db';

class MenuModel extends Model {
  static tableName = 'events';

  id: number;

  title: string;

  date: string;

  street: string;

  city: string;

  state: string;

  zip: number;
}

class Event {
  id: number;

  title: string;

  date: string;

  address: {
    street: string;

    city: string;

    state: string;

    zip: number;
  };

  static query = async (args?: typeof Model.query.arguments) => {
    const rows: MenuModel[] = await MenuModel.query(args);

    const formatEvent = (row: MenuModel) => ({
      id: row.id,
      title: row.title,
      date: row.date,
      address: {
        city: row.city,
        street: row.street,
        state: row.state,
        zip: row.zip
      }
    });

    return rows.map(row => formatEvent(row));
  };
}

export default Event;
