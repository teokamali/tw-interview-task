export const getIconSize = (size: number | [number, number]): { width: number; height: number } => {
   const width = Array.isArray(size) ? size[0] : size;
   const height = Array.isArray(size) ? size[1] : size;
   return { width, height };
};
