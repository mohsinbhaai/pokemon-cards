const {Pokemon} = require('../model/Card');
const _ = require('lodash');
exports.getAllCards = (req, res) => {
 Pokemon.find().then((pokemon) => {
   if(pokemon)
     res.send({
       data:pokemon
     });
   else {
     res.json({
       data:[],
       message: 'no cards found'})
   }
 }, (e) => {
   res.status(400).send(e);
 });
}

exports.getCardByID = (req, res) => {
  var id = req.params.id;
Pokemon.findById(id).then((doc) => {
  res.send(doc);
}, (e) => {
//  res.status(4000).send(e);
console.log(e);
})
}

exports.postCreateCard = (req, res) => {
  console.log(req.body)
  var pokemon = new Pokemon({
    name: req.body.name
  });

  pokemon.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
}

exports.deleteCardById = (req, res) => {
  var id = req.params.id;
Pokemon.findByIdAndRemove(id).then((doc) => {
  res.send(doc);
}, (e) => {
  res.status(4000).send(e);
})
}

exports.updateCardById = (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['name']);

  // if(._isBoolean(body.completed) && body.completed) {
  //
  // }
  Pokemon.findByIdAndUpdate(id, {$set: body}, {new: true}).then((docs) => {
    res.send(docs);
  }, (e) => {
    res.status(4000).send(e);
  })
}

// exports.putUpdateCard = (req, res) => {
//   Pokemon.findById(req.params.id,(err, pokemon) =>{
//     //TODO code error statement
//     if(pokemon)
//     {
//       pokemon.name = req.body.name
//       //TODO check callback function has an error paramter or not
//       pokemon.save((err, pokemon)=>{
//         //TODO check err and return object
//         res.json({message:'Pokemon card updated' })
//       })
//     }
//   })
// }
