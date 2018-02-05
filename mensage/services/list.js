import Mensage from './../schema/Mensage'

export default (req, res) => {
    Mensage
        .find({})
        .then((mensage) => {
            if (!mensage || !mensage.length) {
                return res.status(404)
                            .json({
                                status: false,
                                data: []
                            })
            }

            return res.status(200)
                    .json({
                        status: true,
                        data: mensage
                    })
        })
        .catch(err => res.status(500)
                .json({
                    status: false,
                    data: []
                })
    )
}
