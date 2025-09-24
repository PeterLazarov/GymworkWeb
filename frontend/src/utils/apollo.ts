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
            workout: {
              read(_, { args, toReference }) {
                return args?.date
                  ? toReference({
                      __typename: "Workout",
                      id: `Workout:${args.date}`,
                    })
                  : undefined;
              },
            },
            exerciseRecords: {
              merge(existing = [], incoming) {
                return incoming;
              },
            },
          },
        },
        Workout: {
          keyFields: ["id"],
          fields: {
            steps: {
              merge(existing = [], incoming) {
                return incoming;
              },
            },
          },
        },
        WorkoutStep: {
          keyFields: ["id"],
          fields: {
            sets: {
              merge(existing = [], incoming) {
                return incoming;
              },
            },
            exercises: {
              merge(existing = [], incoming) {
                return incoming;
              },
            },
          },
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
