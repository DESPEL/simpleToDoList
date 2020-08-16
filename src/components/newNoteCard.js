import React from 'react'
import { Paper, makeStyles, Grid, Checkbox, withStyles, FormLabel, Typography, Box } from '@material-ui/core'

import green from '@material-ui/core/colors/green'
import grey from '@material-ui/core/colors/grey'

import {
  useHistory
} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    height: 48,
  },
  content: {
    height: '100%',
    alignItems: 'center',
  },
  text: {
    textAlign: 'left',
  }
})

export default function NewNoteCard() {
  const classes = useStyles()

  const history = useHistory()

  const createNewNote = (e) => {
    let lastId = JSON.parse(localStorage.getItem('last-id'))
    if (lastId === null) {
      lastId = -1
    }
    let noteIds = JSON.parse(localStorage.getItem('note-ids'))
    if (noteIds === null) {
      noteIds = []
    }

    const newId = lastId + 1
    noteIds.push(newId)

    localStorage.setItem('last-id', JSON.stringify(newId))
    localStorage.setItem('note-ids', JSON.stringify(noteIds))

    localStorage.setItem(`note-${newId}`, JSON.stringify({
      title: '',
      content: '',
      completed: false,
    }))
    
    history.push(`/edit/${newId}`, {id: newId})
  }

  return (
    <Grid item xs={12}>
      <Paper className={classes.root} onClick={createNewNote}>
        <Grid className={classes.content} container>
          <Grid item xs={1}>
            +
        </Grid>
          <Grid item xs={10}>
            <Box className={classes.text} textOverflow="ellipsis" overflow="hidden">
              Create new note
          </Box>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}