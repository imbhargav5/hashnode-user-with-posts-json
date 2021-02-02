A simple Github action to fetch basic userinfo + recent posts that user published on hashnode. 

#### Response is in json which you can grab within a github workflow and append to Readme or any file as you choose

#### Note: I might add more fields to the user object depending on what the community asks. Feel free to create a GH issue. 

# Usage

```yaml
      - name: Get recent blog posts from hashnode
        id: hashnode-recent-blog-posts
        uses: imbhargav5/hashnode-user-with-posts-json@master
        with:
          username: "imbhargav5"         
      - name: Generate README file
        run: node action.js
        env:
          HASHNODE_PROFILE: ${{steps.hashnode-recent-blog-posts.outputs.data}}     
```
