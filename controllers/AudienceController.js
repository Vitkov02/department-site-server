const uuid = require('uuid');
const path = require('path');
const { Audience, AudienceInfo } = require('../models/models');

exports.getAll = async (req, res) => {
    try {
        const audience = await Audience.findAll();
        res.json(audience)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error'});
    }
}

exports.create = async (req, res, next) => {
    try {
        const {name, info} = req.body
        const { img } = req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const audience = await Audience.create({name, img: fileName});

        if (info) {
            info = JSON.parse(info)
            info.forEach(i =>
                AudienceInfo.create({
                    title: i.title,
                    description: i.description,
                    audienceId: audience.id
                })
            )
        }

        return res.json(audience)
    } catch (e) {
        next(ApiError.badRequest(e.message))
    }
  };

 exports.getOne = async (req, res) => {
        const {id} = req.params
        const audience = await Audience.findOne(
            {
                where: {id},
                include: [{model: AudienceInfo, as: 'info'}]
            },
        )
        return res.json(audience)
 } 