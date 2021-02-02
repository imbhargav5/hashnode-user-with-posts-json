const { gql, GraphQLClient } = require("graphql-request");

const client = new GraphQLClient("https://api.hashnode.com");

const query = gql`
  query getUserPosts($username: String!) {
    user(username: $username) {
      name
      username
      photo
      coverImage
      numFollowers
      numReactions
      publicationDomain
      publication {
        posts {
          title
          coverImage
          brief
          cuid
          bookmarkedIn
        }
      }
    }
  }
`;

async function getHashnodePosts(username) {
  try {
    const data = await client.request(query, { username });
    return data;
  } catch (err) {
    console.log(err);
    return {};
  }
}

module.exports = getHashnodePosts;
