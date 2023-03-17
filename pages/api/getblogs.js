// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/getblogs?slug=javascript
import * as fs from "fs";

export default function handler(req, res) {
  fs.readFile(`blogData/${req.query.slug}.json`, (err, data) => {
    if (err) {
      res.status(200).json({ error: "No such blog found :(" });
    }
    res.status(200).json(JSON.parse(data));
  });
}
