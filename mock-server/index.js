const { ApolloServer, gql } = require('apollo-server');

// 1. GraphQL Schema
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

// 2. Mock Data
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

// 3. Resolvers ใช้ mock data
const resolvers = {
  Query: {
    questions: () => questionsData,
  },
};

// 4. สร้าง Server
const server = new ApolloServer({ typeDefs, resolvers });

// 5. รัน Server
server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Mock server ready at ${url}`);
});
