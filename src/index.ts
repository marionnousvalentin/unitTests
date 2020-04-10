// @ts-ignore
import * as express from "express";
const app = express();
const port = 3000;

// @ts-ignore
app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

const testDebugger = (variable: boolean) => {
  console.log("dedzdezdez");
  if (variable) {
    console.log("variable", variable);
  }
  console.log("dedzedrqaaaaa");
};

testDebugger(true);
