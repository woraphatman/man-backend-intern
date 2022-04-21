import { Request,Response } from "express";
const movie = require ("../dto/db")

export function get (req:Request, res: Response)  {
    console.log(req.headers)
    res.status(400)
  res.json(movie)
  
  
  }
  
  export function getID (req: Request, res: Response) {
    res.json(movie.find(movie => movie.id === req.params.id))
  }
  
  export function create(req: Request, res: Response) {
    movie.push(req.body)
    console.log(req.headers.ss)
    if(req.headers.Accept != "user1"){
        return res.json({ error:"You must be Admin"}
        )
  }
  res.status(201).send({
    status: "ok",
    message: "Create Finish",
    user: req.body
  })}
  
  export function put(req: Request, res: Response)  {
    const updateIndex = movie.findIndex(movie => movie.id === req.params.id)
    res.json(Object.assign(movie[updateIndex], req.body))
    res.status(202).send({
      status: "ok",
      message: "Create Finish",
      user: req.body
    })}
  
  export function deleteid (req: Request, res: Response)  {
    const deleteIndex = movie.findIndex(movie => movie.id === req.params.id)
    movie.splice(deleteIndex, 1)
    res.status(200).send()
  }
  