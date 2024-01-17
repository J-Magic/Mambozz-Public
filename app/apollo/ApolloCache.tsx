// import {
//   InMemoryCache,
//   ReactiveVar,
//   makeVar,
//   NormalizedCacheObject,
// } from '@apollo/client';

// export const cacheVar: ReactiveVar<InMemoryCache> = makeVar(
//   new InMemoryCache()
// );

// export const modifyCache = (modifier: (cache: InMemoryCache) => void) => {
//   const currentCache = cacheVar();
//   const currentCacheData = currentCache.extract();

//   const newCache = new InMemoryCache();
//   newCache.restore(currentCacheData);
//   modifier(newCache);
//   cacheVar(newCache);
// };

// // export default cache;
