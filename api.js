module.exports =  (app, router) => {

    router.get('/hello', (req, res) => {
        return res.status(200).json("Hello from API!")
    })

    return router
}