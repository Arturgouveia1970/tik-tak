import createClient from '@sanity/client';

export const client = createClient({
  projectId: 'hrbed6zi',
  dataset: 'production',
  apiVersion: '2022-03-07',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
