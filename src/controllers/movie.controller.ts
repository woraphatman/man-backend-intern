import { Request,Response } from "express";
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://man:1234@cluster0.dmuor.mongodb.net/test";
export async function get (req:Request, res: Response)
   {
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
  
  
  export async function create(req: Request, res: Response) {
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

  
  export async function put(req: Request, res: Response)  {
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
  })
  }
  
  export async function deleteid (req: Request, res: Response)  {
    const id = req.body.id;
    const client = new MongoClient(uri);
    await client.connect();
    await client.db('20scoops').collection('movie').deleteOne({'id': id});
    await client.close();
    res.status(200).send({
      "status": "ok",
      "message": "Deleted Finish"
    })}