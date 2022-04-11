const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
const router = require('./routes/router')



app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://man:1234@cluster0.dmuor.mongodb.net/test";

app.get("/", (req:any, res:any) => {
  res.sendFile("./page/index.html", {root: __dirname})
})

app.post(
  "/movie/create",
  async (
    req: { body: any },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        send: {
          (arg0: { status: string; message: string; user: any }): void;
          new (): any;
        };
      };
    }
  ) => {
    const user = req.body;
    console.log(user)
    const client = new MongoClient(uri);
    await client.connect();
    await client
      .db("20scoops")
      .collection("movie")
      .insertOne({
        moviename: user.moviename,
        description: user.description,
        image: user.image,
      });

    await client.close();
    res.status(200).send({
      status: "ok",
      message: "Create Finish",
      user: user,
    });
  }
);
app.get(
  "/movie",
  async (
    req: { params: { id: string } },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        send: { (arg0: any): void; new (): any };
      };
    }
  ) => {
    const id = req.params.id;
    const client = new MongoClient(uri);
    await client.connect();
    const user = await client
      .db("20scoops")
      .collection("movie")
      .find({})
      .toArray();
    await client.close();
    res.status(200).send(user);
  }
);
app.put('/movie/update', async(req: { body: any; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: { status: string; message: string; user: any; }): void; new(): any; }; }; }) => {
  const user = req.body;
  const id = user.id;
  const client = new MongoClient(uri);
  await client.connect();
  await client.db("20scoops")
  .collection("movie").updateOne({'id': id}, {"$set": {
    id: user.id,
    moviename: user.moviename,
    description: user.description,
    image: user.image,
  }});
  await client.close();
  res.status(200).send({
    "status": "ok",
    "message": "Updated Finish",
    "user": user
  });
})
app.delete('/movie/delete', async(req: { body: { id: string; }; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: { status: string; message: string; }): void; new(): any; }; }; }) => {
  const id = req.body.id;
  const client = new MongoClient(uri);
  await client.connect();
  await client.db('20scoops').collection('movie').deleteOne({'id': id});
  await client.close();
  res.status(200).send({
    "status": "ok",
    "message": "Deleted Finish"
  });
})