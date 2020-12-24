const express = require('express')
const router = express.Router()
const query = require('../dataFetch/queries/notesQueries')
const dataFetch = require('../dataFetch/dataFetch');

router.get('/', async (request, response, next) => {
    try {
        let data = await dataFetch(query.GET_NOTES, [], "get all notes", next);
        response.send(data.rows);
    } catch (Exception) {
        next(Exception);
    }
})

router.get('/:noteId', async (request, response, next) => {
    try {
        let data = await dataFetch(query.GET_NOTE_BY_ID, [request.params.noteId], "get note by id", next);
        response.send(data.rows);
    } catch (Exception) {
        next(Exception);
    }
})

router.post('/', async (request, response, next) => {
    let noteTitle = request.body.noteTitle;
    let noteDescription = request.body.noteDescription;
    try {
        let parameters = [noteTitle, noteDescription];
        let data = await dataFetch(query.CREATE_NOTE, parameters, "added new note", next);
        response.status(200).json({
            id: data.rows[0].note_id,
            status: "Successfully Added"

        });
    } catch (Exception) {
        next(Exception);
    }
})

router.put('/', async (request, response, next) => {
    let noteTitle = request.body.noteTitle;
    let noteDescription = request.body.noteDescription;
    let noteId = request.body.noteId;
    let parameters = [noteTitle, noteDescription, noteId];
    try {
        await dataFetch(query.UPDATE_NOTE, parameters, "update note", next)
        response.status(200).json({
            status: "Successfully Updated"
        });
    } catch (Exception) {
        next(Exception)
    }
})

module.exports = router;