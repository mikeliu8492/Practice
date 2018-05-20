module.exports =  (app, router) => {

    router.get('/hello', (req, res) => {
        return res.status(200).json("Hello from API!")
    })

    router.get('/second', (req, res) => {
        return res.status(200).json("API Second!")
    })

    router.get('/third', (req, res) => {
        return res.status(200).json("API Third!")
    })

    return router
}