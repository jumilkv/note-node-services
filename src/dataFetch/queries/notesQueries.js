const GET_NOTES = 'SELECT * FROM notes WHERE status=true';
const GET_NOTE_BY_ID = 'SELECT * FROM notes WHERE note_id = $1 AND status=true';

const CREATE_NOTE = 'INSERT INTO notes (note_title, note_description) VALUES ($1, $2) RETURNING note_id';
const UPDATE_NOTE = 'UPDATE notes SET note_title=$1, note_description=$2 WHERE note_id = $3';

module.exports = {
    GET_NOTES,
    GET_NOTE_BY_ID,
    CREATE_NOTE,
    UPDATE_NOTE
}
