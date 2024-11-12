import { Router } from "./router.ts";
import { serveDir } from "jsr:@std/http@1.0.9/file-server";


const router = new Router();

router.get("/", (_req) => {
  return new Response("Hello deno");
});
router.get("/about", (_req) => {
  return new Response("About page");
});
router.get("/users/:id", (_req, _info, params) => {
  return new Response(params?.pathname.groups.id);
});

router.get("/static/*", (req) => serveDir(req));

export default { 
	fetch(req) { 
		return router.handler(req);
	}, 

} as Deno.ServeDefaultExport;