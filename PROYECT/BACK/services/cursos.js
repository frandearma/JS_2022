const db = require('./db');
const config = require('../config');
/*
    Metodo GET
 */
async function getAll(){
    const rows = await db.query(
        `SELECT id, name FROM curso`
    );
    const data = (rows);
    return {
        data
    }
}
/*
    Metodo DETAIL GET
 */
async function get(id){
    const rows = await db.query(
        `SELECT id, name 
        FROM curso
        WHERE id=${id}`
    );
    const data = (rows);
    return {
        data
    }
}
/*
    Metodo POST
 */
async function create(curso){
    const result = await db.query(
        `INSERT INTO curso (name) VALUES ("${curso.name}")`
    );
    let message = 'Error al crear un curso.';
    if (result.affectedRows) {
        message = 'Curso creado con exito.';
    }
    return {message};
}
/*
    Metodo PUT
 */
async function update(id, curso){
    const result = await db.query(
        `UPDATE curso 
        SET name="${curso.name}" 
        WHERE id=${id}`
    );
    let message = 'Error al actualizar el curso.';

    if (result.affectedRows) {
        message = 'Curso actualizado correctamente.';
    }
    return {message};
}
/*
    Metodo DELETE
 */
async function remove(id){
    const result = await db.query(
        `DELETE FROM curso 
        WHERE id=${id}`
    );
    let message = 'Error al eliminar el curso.';

    if (result.affectedRows) {
        message = 'Curso eliminado correctamente.';
    }
    return {message};
}

module.exports = {
    getAll,
    get,
    create,
    update,
    remove
}