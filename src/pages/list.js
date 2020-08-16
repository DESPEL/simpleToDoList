import React, { useState } from 'react'
import { Container, Grid, Box, Typography, makeStyles } from '@material-ui/core'
import green from '@material-ui/core/colors/green'
import Done from '@material-ui/icons/Done'

import NoteCard from '../components/noteCard'
import NewNoteCard from '../components/newNoteCard'

function loadNotes(update) {
  let ids = JSON.parse(localStorage.getItem('note-ids'))
  if (ids === null) return
  const noteCards = []
  ids = ids.reverse()

  ids.forEach((id) => {
    const data = JSON.parse(localStorage.getItem(`note-${id}`))
    if (data.completed) {
      return
    }
    noteCards.push(
      <NoteCard id={id} title={data.title} completed={data.completed} update={update} key={id} />
    )
  })
  ids.forEach((id) => {
    const data = JSON.parse(localStorage.getItem(`note-${id}`))
    if (!data.completed) {
      return
    }
    noteCards.push(
      <NoteCard id={id} title={data.title} completed={data.completed} update={update} key={id} />
    )
  })
  return noteCards
}

const useStyles = makeStyles({
  content: {
    marginTop: '5vh',
  }
})

export default function List(props) {
  const classes = useStyles()

  const [, setDummyState] = useState('.')

  return (
    <div>
      <Container className={classes.content}>
        <Box display="flex" justifyContent="center">
          <Done style={{
            fontSize: 100,
            color: green[400],
          }} />
        </Box>
        <Box display="flex" justifyContent="center">
          <Typography variant="h3">To Do List</Typography>
        </Box>
        <Grid className={classes.content} container spacing={1}>
          <NewNoteCard />
          {loadNotes(setDummyState)}
        </Grid>
      </Container>
    </div>

  )
}