import Express from "express";
import path from "path";
import favicon from "serve-favicon";

const app = Express();
const __dirname = path.resolve(path.dirname(""));

app.use(Express.static(__dirname + "/public"));
app.use(favicon(path.join(__dirname, "public/media", "burger-solid.ico")));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.get("/shop", (req, res) => {
  res.sendFile(__dirname + "/public/shop.html");
});
app.get("/members", (req, res) => {
  res.sendFile(__dirname + "/public/members.html");
});
app.get("/video-description", (req, res) => {
  res.sendFile(__dirname + "/public/videodesc.xhtml");
});
