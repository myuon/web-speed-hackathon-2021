import React from 'react';
import { Helmet } from 'react-helmet';

import { InfiniteScroll } from '../../components/foundation/InfiniteScroll';
import { TimelinePage } from '../../components/timeline/TimelinePage';
import { useInfiniteFetch } from '../../hooks/use_infinite_fetch';
import { fetchJSON } from '../../utils/fetchers';

const LIMIT = 10;

/** @type {React.VFC} */
const TimelineContainer = () => {
  const { data: posts, fetchMore } = useInfiniteFetch(
    `/api/v1/posts?limit=${LIMIT}`,
    (url, offset) => {
      return fetchJSON(`${url}&offset=${offset}`);
    },
    LIMIT,
  );
  console.log(posts);

  return (
    <InfiniteScroll fetchMore={fetchMore} items={posts}>
      <Helmet>
        <title>タイムライン - CAwitter</title>
      </Helmet>
      <TimelinePage timeline={posts} />
    </InfiniteScroll>
  );
};

export { TimelineContainer };
