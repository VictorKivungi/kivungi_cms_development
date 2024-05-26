module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_hulbVCuxNfXen2iJVlCNh9yZfqjJ/TUjvIRVfEH",
        apiToken: "cZGaBOMKDEP2h9pPNvAZEoo7",
        appFilter: "kivungi-cms",
        teamFilter: "team_JVNk9SRMbtKL5ksYBL0qDMnV",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },
  });