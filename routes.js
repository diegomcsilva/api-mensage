import hello from './hello/index'
import bills from './bills/index'
import mensage from './mensage/index'

export default (app) => {
    app.use('/', hello)
    app.use('/bills', bills)
    app.use('/mensage', mensage)
}
