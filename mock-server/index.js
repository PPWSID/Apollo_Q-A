const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Question {
    id: ID!
    content: String!
    tags: [String!]!
  }

  type Query {
    questions: [Question!]!
  }
`;

const questionsData = [
  {
    id: '1',
    content: 'กรดกับเบสต่างกันอย่างไร?',
    tags: ['เคมี', 'วิทยาศาสตร์'],
  },
  {
    id: '2',
    content: 'Photosynthesis คืออะไร?',
    tags: ['ชีววิทยา', 'พืช'],
  },
  {
    id: '3',
    content: 'โพรตอนคืออะไร?',
    tags: ['ฟิสิกส์', 'อะตอม'],
  },
];

const resolvers = {
  Query: {
    questions: () => questionsData,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Mock server ready at ${url}`);
});
