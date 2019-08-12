/**
 * CreatecharacterController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

//Main Controller

var axios = require("axios");

module.exports = {
  //start app
  start: async function(req, res, next) {
    sails.log.silly("Start");

    let getI = await getItems();

    //phase 1
    //retrieve items from database
    let items = await Items.find({});

    //retrieve characters from database
    let characters = await Characters.find({});
    sails.log.verbose("characters length", characters.length);

    //phase 2
    //retrieve items from outside api
    //store in database
    //removing duplicates
    //retrieve items from database
    //retrieve characters from database

    sails.log.silly("Routing to dashboard");
    sails.log.silly("Characters: ", characters);
    //return the dashboard
    res.view("./pages/dashboard", { characters: characters });

    // })
  }
};

function getItems() {
  axios
    .get(sails.config.globals.itemsAPI)
    .then(res => {
      // handle success
      sails.log.debug(res.data);
      return res.data;
    })
    .catch(function(error) {
      // handle error
      sails.log.error(error);
    })
    .finally(function() {
      // always executed
    });
}

function compareItems() {
  sails.log.silly("Comparing Items");
  //check in the database
  //send new items to new array

  //write the new items to the database

  //return nothing

}
