// import schemaTypes from 'all:part:@sanity/base/schema-type';
import comment from "./comment";
import user from './user';
import post from './post'
import postedBy from "./postedBy";



export const schemaTypes = [
  post,
  user,
  comment,
  postedBy
]
