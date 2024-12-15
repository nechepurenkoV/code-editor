import { createServer, Response } from "miragejs";

export function makeServer() {
  createServer({
    routes() {
      this.post("/api/execute", (_schema, request) => {
        const { language, code } = JSON.parse(request.requestBody);

        if (code.includes("error")) {
          return new Response(
            400,
            {},
            { status: "error", error: "SyntaxError: Unexpected token" }
          );
        }

        return {
          status: "success",
          output: `Executed ${language} code successfully:\n\n"Hello, world!"`,
        };
      });
    },
  });
}
