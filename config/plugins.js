module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_https://api.vercel.com/v1/integrations/deploy/prj_SZWm5hpSQNnMXNby2wlxGTZJ3Fvf/V7qbxEgbSf",
      apiToken: "LoV5PSgHyV8W7C51alTEDgLV",
      appFilter: "license-plates",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
