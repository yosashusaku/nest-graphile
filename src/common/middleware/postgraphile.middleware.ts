import { postgraphile } from 'postgraphile';

export const middleware = postgraphile(process.env.DATABASE_URL, 'public', {
  subscriptions: true,
  watchPg: true,
  dynamicJson: true,
  setofFunctionsContainNulls: false,
  ignoreRBAC: false,
  showErrorStack: 'json',
  extendedErrors: ['hint', 'detail', 'errcode'],
  appendPlugins: [require('@graphile-contrib/pg-simplify-inflector')],
  exportGqlSchemaPath: 'schema.graphql',
  graphiql: true,
  enhanceGraphiql: true,
  enableQueryBatching: true,
  legacyRelations: 'omit',
});
