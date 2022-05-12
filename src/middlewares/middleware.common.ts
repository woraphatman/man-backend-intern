import express, { Express, Router } from "express";

export function requrl (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
  }
export function retype (req, res, next)  {
    console.log('Request Type:', req.method)
    next()
  }

export function redate (req, res, next) {
  console.log('Time:', Date.now())
  next()
}
export default  exports;
