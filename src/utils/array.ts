export const isDefined = <T>(item: T | undefined | null): item is T => {
  return item !== undefined && item !== null;
};

export const findItemBySlug = <T extends { slug: string }>(
  items: T[],
  slug: string,
): T | undefined => items.find((item) => item.slug === slug);

export const findItemById = <T extends { id: string }>(
  items: T[],
  id: string,
): T | undefined => items.find((item) => item.id === id);
