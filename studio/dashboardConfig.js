export default {
  widgets: [
    {
      name: "sanity-tutorials",
      options: {
        templateRepoId: "sanity-io/sanity-template-gatsby-portfolio"
      }
    },
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId: "5d909df9a24467260f9236cf",
                  title: "Sanity Studio",
                  name: "fiskevegn-studio",
                  apiId: "09d9215a-dba2-4ed8-842a-7f113f50876d"
                },
                {
                  buildHookId: "5d909df9eb12d7a5b2f06dc6",
                  title: "AS Fiskevegn Website",
                  name: "fiskevegn",
                  apiId: "8226b61b-4907-4cc5-a27b-70075b3f1520"
                }
              ]
            }
          }
        ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/havhol/fiskevegn",
            category: "Code"
          },
          {
            title: "Frontend",
            value: "https://fiskevegn.netlify.com",
            category: "apps"
          }
        ]
      }
    },
    { name: "project-users", layout: { height: "auto" } }
  ]
};
