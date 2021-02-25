const Koa = require("koa");
const next = require("next");

const PORT = 8080;

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = new Koa();
    server.use(async (ctx, next) => {
        await handle(ctx.req, ctx.res);
        ctx.respond = false;
    });

    server.listen(PORT, () => {
        console.log("========== Springboard [by cuso4-5h2o] ==========")
        console.log("Listening on http://localhost:%s (%s Mode)", PORT.toString(), (dev?"Development":"Production"));
    });
});
