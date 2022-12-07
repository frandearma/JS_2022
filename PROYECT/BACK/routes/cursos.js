const express = require('express');
const router = express.Router();
const cursos = require('../services/cursos');

/* GET cursos. */
router.get('/', async function(req, res, next) {
    try {
        res.json(await cursos.getAll());
    } catch (err) {
        console.error(`Error al consultar los cursos `, err.message);
        next(err);
    }
});
/* Detail Curso */
router.get('/:id', async function(req, res, next) {
    try {
        res.json(await cursos.get(req.params.id));
    } catch (err) {
        console.error(`Error al consultar el curso`, err.message);
        next(err);
    }
});
/* POST cursos. */
router.post('/', async function(req, res, next) {
    try {
        res.json(await cursos.create(req.body));
    } catch (err) {
        console.error(`Error al crear un curso`, err.message);
        next(err);
    }
});
/* PUT Curso */
router.put('/:id', async function(req, res, next) {
    try {
        res.json(await cursos.update(req.params.id, req.body));
    } catch (err) {
        console.error(`Error al actualizar curso`, err.message);
        next(err);
    }
});
/* DELETE Curso */
router.delete('/:id', async function(req, res, next) {
    try {
        res.json(await cursos.remove(req.params.id));
    } catch (err) {
        console.error(`Error al eliminar el curso`, err.message);
        next(err);
    }
});
module.exports = router;