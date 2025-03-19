import app from "./server.js";

const port = Number(process.env.PORT || 8080);

app.listen(port, () => {
    console.log(`[Server]: Server is running at http://localhost:${port}`)
    console.log(`[Server]: Server is running at http://0.0.0.0:${port}`)
});
