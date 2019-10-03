const Song = require('../models/song');

exports.create = (req, res) => {
  const song = new Song({
    name: req.body.name,
    artist: req.body.artistId,
    album: req.params.id,
  });
  song.save().then((savedSong) => {
    Song.findOne({ _id: savedSong._id })
    .populate({ path: 'artist' })
    .populate({ path: 'album' })
      .exec((err, a) => {
        console.log(a);
        res.status(201).json(a);
      });
  });
};
