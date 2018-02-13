import Mensage from './../schema/Mensage'

export default (req, res) => {
    Mensage
        .findByIdAndRemove(req.params.id)
        .then(() => res.status(204).end())
        .catch(err => res.status(500)
            .json({
                status: false,
                data: {}
            })
        )
}
