import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import {Container} from 'react-bootstrap'

export function App() {
    return <Container className="my-4">
        <Routes>
            <Route
                path="/"
                element={
                    <NoteList
                        notes={notesWithTags}
                        availableTags={tags}
                        onUpdateTag={updateTag}
                        onDeleteTag={deleteTag}
                    />
                }
            />
            <Route
                path="/new"
                element={
                    <NewNote
                        onSubmit={onCreateNote}
                        onAddTag={addTag}
                        availableTags={tags}
                    />
                }
            />
            <Route path="/:id" element={<NoteLayout notes={notesWithTags}/>}>
                <Route index element={<Note onDelete={onDeleteNote}/>}/>
                <Route
                    path="edit"
                    element={
                        <EditNote
                            onSubmit={onUpdateNote}
                            onAddTag={addTag}
                            availableTags={tags}
                        />
                    }
                />
            </Route>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    </Container>
}


