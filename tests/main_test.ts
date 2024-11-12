import {assertEquals} from "@std/assert"

Deno.test("url ~ /", async () => {
    const res = await fetch("http://localhost:8000/");
    assertEquals(res.status, 200);
    assertEquals(await res.text(), "Hello deno");
}); 


Deno.test("url ~ /users/1", async () => {
    const res = await fetch("http://localhost:8000/users/1");
    assertEquals(res.status, 200);
    assertEquals(await res.text(), "1");
}); 



Deno.test("url ~ /static/index.html", async () => {
    const res = await fetch("http://localhost:8000/static/index.html");
    assertEquals(res.status, 200);
    assertEquals(await res.text(), "<h1>Hello World</h1>");
});