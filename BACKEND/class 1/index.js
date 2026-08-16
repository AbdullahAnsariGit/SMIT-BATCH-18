import http from "http"
const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url == '/') {
        res.end("Abdullah Ansari")
    }
});

// Start the server and listen on port 3000
server.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});