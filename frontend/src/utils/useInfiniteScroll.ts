import { useCallback, useEffect, useRef, useState } from "react";

interface Edge<T> {
  node: T;
  cursor: string;
}

interface PageInfo {
  hasNextPage: boolean;
  endCursor: string | null;
}

interface FetchMoreOptions<T> {
  variables: {
    after?: string | null;
    first: number;
  };
  updateQuery: (
    prev: any,
    { fetchMoreResult }: { fetchMoreResult: any }
  ) => any;
}

interface UseInfiniteScrollOptions<T> {
  data?: {
    edges: Edge<T>[];
    pageInfo: PageInfo;
  };
  loading: boolean;
  fetchMore: (options: FetchMoreOptions<T>) => Promise<any>;
  pageSize?: number;
  threshold?: number;
  getNodeId?: (node: T) => string | number;
}

export function useInfiniteScroll<T>({
  data,
  loading: externalLoading,
  fetchMore,
  pageSize = 20,
  threshold = 800,
  getNodeId = (node: any) => node.id,
}: UseInfiniteScrollOptions<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const loading = externalLoading || isLoadingMore;
  const hasNextPage = !!data?.pageInfo.hasNextPage;

  const loadMore = useCallback(async () => {
    if (!data?.pageInfo.hasNextPage || isLoadingMore) return;

    setIsLoadingMore(true);
    try {
      await fetchMore({
        variables: {
          after: data.pageInfo.endCursor,
          first: pageSize,
        },
        updateQuery: (
          prev: any,
          { fetchMoreResult }: { fetchMoreResult: any }
        ) => {
          if (!fetchMoreResult) return prev;

          const connectionKey = Object.keys(fetchMoreResult)[0];
          const prevConnection = prev[connectionKey];
          const newConnection = fetchMoreResult[connectionKey];

          const existingIds = new Set(
            prevConnection.edges.map((edge: Edge<T>) => getNodeId(edge.node))
          );

          const newEdges = newConnection.edges.filter(
            (edge: Edge<T>) => !existingIds.has(getNodeId(edge.node))
          );

          return {
            [connectionKey]: {
              ...newConnection,
              edges: [...prevConnection.edges, ...newEdges],
            },
          };
        },
      });
    } finally {
      setIsLoadingMore(false);
    }
  }, [data?.pageInfo, fetchMore, isLoadingMore, pageSize, getNodeId]);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container || loading || !hasNextPage) return;

    const { scrollTop, scrollHeight, clientHeight } = container;
    const scrollBottom = scrollHeight - scrollTop - clientHeight;

    if (scrollBottom <= threshold) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        loadMore();
      }, 200);
    }
  }, [loading, hasNextPage, threshold, loadMore]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleScroll]);

  return {
    containerRef,
    loading,
    hasNextPage,
    loadMore,
  };
}
