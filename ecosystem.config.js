module.exports = {
    apps: [
        {
            name: "cuso4-5h2o",
            script: "./server.js",
            watch: true,
            env: {
                "NODE_ENV": "development"
            },
            env_production: {
                "NODE_ENV": "production",
            }
        }
    ]
}
