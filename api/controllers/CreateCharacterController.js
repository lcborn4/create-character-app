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

    /**** phase 1 ****/
    //retrieve items from database
    // let items = await Items.find({});

    //retrieve characters from database
    // let characters = await Characters.find({});
    // sails.log.verbose("characters length", characters.length);

    /**** phase 2 ****/
    //retrieve items from outside api
    let getI = await getItems(); //these should include all items

    //store in database
    //removing duplicates
    let compareI = await compareItems();

    //retrieve characters from database
    let characters = await Characters.find({});
    sails.log.verbose("characters length", characters.length);

    sails.log.silly("Routing to dashboard");
    sails.log.silly("Characters: ", characters);
    //return the dashboard
    res.view("./pages/dashboard", { characters: characters });

    // })
  }
};

function getItems() {
  return new Promise((resolve, reject) => {
    axios
      .get(sails.config.globals.itemsAPI)
      .then(res => {
        // handle success
        sails.log.debug(res.data);
        resolve(res.data);
      })
      .catch(err => {
        // handle error
        sails.log.error(err);
        reject(err);
      });
  });
}

//save the items in the database
//if already in the database ignore
//upsert in mongo
function compareItems() {
  sails.log.silly("Comparing Items");

  return new Promise((resolve, reject) => {
    //check in the database
    //upset
    //send new items to new array

    //write the new items to the database

    //return nothing
    resolve();
  }).catch(err => {
    // handle error
    sails.log.error(err);
    reject(err);
  });
}
