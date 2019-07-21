/**
 * CreatecharacterController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    //start app
    start: async function (req, res, next) {

        sails.log('Start')

        //phase 1
        //retrieve items from database
        //retrieve characters from database

        //phase 2
        //retrieve items from outside api
        //store in database
        //removing duplicates
        //retrieve items from database
        //retrieve characters from database





        //return the dashboard
        res.view('./pages/dashboard.ejs')
    },

};

