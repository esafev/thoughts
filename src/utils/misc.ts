function isProd(): boolean {
  return import.meta.env.MODE === 'production';
}

export { isProd };
