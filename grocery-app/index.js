/**
 * bring in the express module to use in this app
 */
 const express = require("express");
 // ??? Does this self populate ???
 const req = require("express/lib/request");
 
 /**
  * get an app instance using the express framework
  */
 const app = express();
 
 app.use(express.json());
 
 /**
  * define the PORT that the server should be listening on
  */
 const PORT = 8080;
 
 /**
  * create a list, an empty array, meant for items to be shopped
  * these items should be objects
  */
 let list = [];
 
 /**
  * create an operation to allow for GET REQUESTS to retrieve all items from the list
  */
 app.get("/list", function(req, res) {
     console.log("GET /list");
     // return the entire list in the response
     res.json(list);
 });
 
 /**
  * create an operation to allow for DELETE REQUESTS on a specific item
  * delete the item from the list
  */
 app.delete("/list/:pos", function(req, res) {
     console.log("DELETE /list/:id");
     let deleted = list.splice(req.params.pos, 1);
     res.json(deleted);
 })
 
 
 /**
  * create an operation to allow for POST REQUESTS
  * add an item to the list
  */
 app.post("/list", function(req, res) {
     console.log("POST /list");
     let input = req.body;

     console.log("New Item: ", newItem);

     // add the new item in json format
     // ??? Not sure about this ???
     list.push(newItem);

     // respond back with the item we added in json format
     // ?? Not sure about this ??
     res.json(newItem);
 });
 
 
 /**
  * create an operation to allow for PUT REQUESTS
  * update the item at the position
  */
 app.put("/list/:pos", function(req, res) {
     console.log("PUT /list/:pos");
     let input = req.body;
     let pos = req.params.pos;
     // update the item in json format
     // ??? Not sure about this ???
     list(pos) = input.json();
     // send a status code showing that UPDATE was successful
     res.sendStatus(202);
 })
 
 
 
 
 /**
  * create an operation for the server to be listening on a specified PORT
  */
 app.listen(PORT, function() {
     console.log("This server started and is listening on PORT ", PORT);
 });
 