import { db } from '../db';

interface DbMenu {
  id: number;
  item: string;
}

interface DbFlavor {
  item: number;
  flavor: string;
  color?: string;
}

const get = async () => {
  const items: DbMenu[] = await db('menu');

  const flavors: DbFlavor[] = await db('flavors');

  return items.map(({ id, item }: DbMenu) => {
    return {
      item,
      flavors: flavors.filter((flavor: DbFlavor) => flavor.item === id)
    };
  });
};

export default {
  get
};
