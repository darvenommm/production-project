type Mods = Record<string, boolean>;

export const classNames = (
  className: string,
  mods: Mods = {},
  additional: string[] = [],
): string => {
  return [
    className,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, flag]): boolean => flag)
      .map(([className]) => className),
  ].join(' ');
};
