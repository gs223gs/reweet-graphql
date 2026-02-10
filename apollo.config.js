export default {
  client: {
    service: {
      name: "remeet",
      localSchemaFile: "./graphql/schema/schema.graphql",
    },
    // operation だけ拾う
    includes: [
      "./src/**/*.{graphql,gql}",
      "./graphql/operations/**/*.{graphql,gql}",
    ],
    excludes: ["**/node_modules/**", "**/.next/**", "./graphql/schema/**"],
  },
};
