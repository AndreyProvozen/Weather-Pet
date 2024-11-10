const formatLocation = (location: string) => {
  return location
    .split('-')
    .map(word => word?.[0]?.toUpperCase() + word.slice(1))
    .join(' ');
};

const parseLocationSlug = (slug: string) => {
  const [state = '', city = ''] = slug.split('--');

  return { state: formatLocation(state), city: formatLocation(city) };
};

export default parseLocationSlug;
