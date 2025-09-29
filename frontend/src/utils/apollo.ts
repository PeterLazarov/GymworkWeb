import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "/graphql",
      credentials: "same-origin",
    }),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            exercises: {
              merge: (_, incoming) => incoming,
            },
            workouts: {
              merge: (_, incoming) => incoming,
            },
            exerciseRecords: {
              merge: (_, incoming) => incoming,
            },
          },
        },
        Workout: {
          keyFields: ["id"],
        },
        WorkoutStep: {
          keyFields: ["id"],
        },
        WorkoutSet: {
          keyFields: ["id"],
        },
        Exercise: {
          keyFields: ["id"],
        },
      },
    }),
  });
};
