import { Request,Response } from "express";
const movie = require ("../dto/db")

export function get (req:Request, res: Response)  {
    res.json(movie)
  }
  
  export function getID (req: Request, res: Response) {
    res.json(movie.find(movie => movie.id === req.params.id))
  }
  
  export function create(req: Request, res: Response) {
    movie.push(req.body)
    res.status(200).json(req.body)
  }
  
  export function put(req: Request, res: Response)  {
    const updateIndex = movie.findIndex(movie => movie.id === req.params.id)
    res.json(Object.assign(movie[updateIndex], req.body))
  }
  
  export function deleteid (req: Request, res: Response)  {
    const deleteIndex = movie.findIndex(movie => movie.id === req.params.id)
    movie.splice(deleteIndex, 1)
    res.status(200).send()
  }
  