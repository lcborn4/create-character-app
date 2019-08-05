/**
 * CreatecharacterController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

//Main Controller

module.exports = {

    //start app
    start: async function (req, res, next) {

        sails.log('Start')

        //phase 1
        //retrieve items from database
        let items = await Items.find({})

        //retrieve characters from database
        let characters = await Characters.find({})
        sails.log('characters length',characters.length)
        
        //phase 2
        //retrieve items from outside api
        //store in database
        //removing duplicates
        //retrieve items from database
        //retrieve characters from database





        //return the dashboard
        res.view('./pages/dashboard.ejs',{characters: characters})
    },

};

