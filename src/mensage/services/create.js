import Mensage from './../schema/Mensage'

export default (req, res) => {
    let mensage = new Mensage(req.body)

    mensage
        .save()
        .then((created) => {
            if (!created) {
                return res.status(404)
                        .json({
                            status: false,
                            data: []
                        })
            }

            return res.status(201)
                    .json({
                        status: true,
                        data: created
                    })
        })
        .catch(err => res.status(500)
                    .json({
                        status: false,
                        data: []
                    })
    )
}
