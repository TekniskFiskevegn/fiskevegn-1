# fiskevegn-studio

Workflow

1. npm run dev 
2. Make changes in /schemas
3. This will update sanity studio
4. But Gatsby will fail
5. To fix this: npm run graphql-deploy
6. Restart npm run dev
7. Gatsby will most likely fail again, because of missing fields in the update sanity studio
8. To fix this: changes some content on the current document, and re-publish
9. It should now work
