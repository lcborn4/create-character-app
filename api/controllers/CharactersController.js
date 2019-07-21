/**
 * CharactersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    createCharacter: async function (req, res, next) {

        sails.log('creating character - req.body', req.body)

        //if you don't include fetch - createdCharacter will be undefined
        let createdCharacter = await Characters.create(req.body).fetch();

        sails.log(createdCharacter);

        //return to dashboard
        return res.redirect('/dashboard');
    }

};

