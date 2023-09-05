export async function createImage(source: string): Promise<HTMLImageElement> {
  const image = new Image();
  image.src = source;
  await new Promise<void>((resolve, reject) => {
    image.addEventListener('load', () => resolve());
    image.addEventListener('error', () => reject());
  });
  return image;
}
