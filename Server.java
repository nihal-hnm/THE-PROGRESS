import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

/**
 * ==============================================================================
 * PORTFOLIO STUDIO — PURE JAVA STATIC WEB SERVER
 * ==============================================================================
 * This Java file serves the complete portfolio website (HTML, CSS, JS)
 * using Java's built-in HttpServer (zero third-party dependencies required).
 *
 * HOW TO RUN:
 *   Option 1 (Java 11+ directly):
 *       java Server.java
 *
 *   Option 2 (Compile & Run):
 *       javac Server.java
 *       java Server
 *
 * Once running, open your web browser at:
 *   http://localhost:8080/
 * ==============================================================================
 */
public class Server {

    private static final int DEFAULT_PORT = 8080;
    private static final Map<String, String> MIME_TYPES = new HashMap<>();

    static {
        MIME_TYPES.put("html", "text/html; charset=UTF-8");
        MIME_TYPES.put("htm", "text/html; charset=UTF-8");
        MIME_TYPES.put("css", "text/css; charset=UTF-8");
        MIME_TYPES.put("js", "application/javascript; charset=UTF-8");
        MIME_TYPES.put("json", "application/json; charset=UTF-8");
        MIME_TYPES.put("svg", "image/svg+xml");
        MIME_TYPES.put("png", "image/png");
        MIME_TYPES.put("jpg", "image/jpeg");
        MIME_TYPES.put("jpeg", "image/jpeg");
        MIME_TYPES.put("gif", "image/gif");
        MIME_TYPES.put("ico", "image/x-icon");
        MIME_TYPES.put("txt", "text/plain; charset=UTF-8");
        MIME_TYPES.put("woff", "font/woff");
        MIME_TYPES.put("woff2", "font/woff2");
        MIME_TYPES.put("ttf", "font/ttf");
    }

    public static void main(String[] args) {
        int port = DEFAULT_PORT;

        // Check if port passed as command-line argument
        if (args.length > 0) {
            try {
                port = Integer.parseInt(args[0]);
            } catch (NumberFormatException e) {
                System.err.println("Invalid port specified. Falling back to " + DEFAULT_PORT);
            }
        }

        try {
            HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
            server.createContext("/", new StaticFileHandler());
            server.setExecutor(null); // Default single/multi-thread executor
            server.start();

            System.out.println("=======================================================");
            System.out.println("  Portfolio Studio Web Server is RUNNING");
            System.out.println("=======================================================");
            System.out.println("  Local URL   : http://localhost:" + port + "/");
            System.out.println("  Serving Dir : " + Paths.get(".").toAbsolutePath().normalize());
            System.out.println("  Press Ctrl+C to stop the server.");
            System.out.println("=======================================================");

        } catch (IOException e) {
            System.err.println("Error starting Java web server: " + e.getMessage());
            e.printStackTrace();
        }
    }

    /**
     * HTTP Handler that resolves and serves requested static files.
     */
    static class StaticFileHandler implements HttpHandler {

        private static final DateTimeFormatter TIME_FORMAT = DateTimeFormatter.ofPattern("HH:mm:ss");

        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String method = exchange.getRequestMethod();

            if (!"GET".equalsIgnoreCase(method) && !"HEAD".equalsIgnoreCase(method)) {
                sendResponse(exchange, 405, "Method Not Allowed", "text/plain");
                return;
            }

            String requestedPath = exchange.getRequestURI().getPath();

            // Default route "/" points to "index.html"
            if (requestedPath.equals("/") || requestedPath.isEmpty()) {
                requestedPath = "/index.html";
            }

            // Sanitize path to prevent directory traversal
            Path baseDir = Paths.get(".").toAbsolutePath().normalize();
            Path targetFile = baseDir.resolve(requestedPath.startsWith("/") ? requestedPath.substring(1) : requestedPath).normalize();

            // Security check: ensure target file is inside base directory
            if (!targetFile.startsWith(baseDir)) {
                logRequest(403, requestedPath);
                sendResponse(exchange, 403, "403 Forbidden: Access Denied", "text/plain");
                return;
            }

            File file = targetFile.toFile();

            if (!file.exists() || file.isDirectory()) {
                logRequest(404, requestedPath);
                String notFoundHtml = "<!DOCTYPE html><html><head><title>404 Not Found</title></head>"
                        + "<body style='font-family:sans-serif;text-align:center;padding:50px;'>"
                        + "<h1>404 - File Not Found</h1>"
                        + "<p>The requested file <code>" + requestedPath + "</code> was not found.</p>"
                        + "<a href='/'>Return to Home</a>"
                        + "</body></html>";
                sendResponse(exchange, 404, notFoundHtml, "text/html; charset=UTF-8");
                return;
            }

            // Determine MIME type
            String mimeType = getMimeType(file.getName());

            // Read file and send response
            try {
                byte[] fileBytes = Files.readAllBytes(file.toPath());
                exchange.getResponseHeaders().set("Content-Type", mimeType);
                exchange.getResponseHeaders().set("Cache-Control", "no-cache");
                exchange.sendResponseHeaders(200, fileBytes.length);

                if ("GET".equalsIgnoreCase(method)) {
                    try (OutputStream os = exchange.getResponseBody()) {
                        os.write(fileBytes);
                    }
                }
                logRequest(200, requestedPath);
            } catch (IOException ex) {
                logRequest(500, requestedPath);
                sendResponse(exchange, 500, "500 Internal Server Error", "text/plain");
            }
        }

        private void sendResponse(HttpExchange exchange, int statusCode, String content, String contentType) throws IOException {
            byte[] bytes = content.getBytes();
            exchange.getResponseHeaders().set("Content-Type", contentType);
            exchange.sendResponseHeaders(statusCode, bytes.length);
            try (OutputStream os = exchange.getResponseBody()) {
                os.write(bytes);
            }
        }

        private String getMimeType(String fileName) {
            int lastDot = fileName.lastIndexOf('.');
            if (lastDot > 0 && lastDot < fileName.length() - 1) {
                String extension = fileName.substring(lastDot + 1).toLowerCase();
                return MIME_TYPES.getOrDefault(extension, "application/octet-stream");
            }
            return "application/octet-stream";
        }

        private void logRequest(int statusCode, String path) {
            String time = LocalDateTime.now().format(TIME_FORMAT);
            System.out.printf("[%s] HTTP %d : %s%n", time, statusCode, path);
        }
    }
}
