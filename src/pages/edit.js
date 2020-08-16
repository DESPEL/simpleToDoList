import React, { useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { Container, Grid, Box, IconButton, Icon, makeStyles, useTheme, TextField, withStyles, InputBase, Paper } from '@material-ui/core'

import {
  red,
} from '@material-ui/core/colors'

import {
  ArrowBackIos,
  DeleteOutline,
  FilterNone
} from '@material-ui/icons'

export default function Edit(props) {
  const history = useHistory()

  const state = props.history.location.state
  const id = state.id
  let data = JSON.parse(localStorage.getItem(`note-${id}`))

  const [title, setTitle] = useState(data.title)
  const [content, setContent] = useState(data.content)

  const theme = useTheme()

  const useStyles = makeStyles({
    arrowBack: {
      color: theme.palette.text.primary,
    },
    deleteButton: {
      color: theme.palette.error.main,
    },
    contentInput: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: 20,
      width: '100%',
      padding: 8,
    }
  })

  const [TitleTextField,] = useState(withStyles({
    root: {
      width: '100%',
      '& label.Mui-focused': {
        color: theme.palette.background.paper,
      },
      '& label': {
        color: theme.palette.background.paper,
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          color: theme.palette.background.white,
          borderColor: theme.palette.background.paper,
        },
        '&.Mui-focused fieldset': {
          color: theme.palette.background.paper,
          borderColor: theme.palette.background.paper,
        },
      },
    }
  })(TextField))

  const handleTitleChange = (e) => {
    data.title = e.target.value
    localStorage.setItem(`note-${id}`, JSON.stringify(data))
    setTitle(e.target.value)
  }

  const handleContentChange = (e) => {
    data.content = e.target.value
    localStorage.setItem(`note-${id}`, JSON.stringify(data))
    setContent(e.target.value)
  }

  const deleteNote = () => {
    let ids = JSON.parse(localStorage.getItem('note-ids'))
    ids = ids.filter((v) => v !== id)

    localStorage.setItem('note-ids', JSON.stringify(ids))
    localStorage.removeItem(`note-${id}`)

    history.goBack()
  }

  const classes = useStyles()
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Box display="flex" flexDirection="row">
            <IconButton onClick={() => history.goBack()}>
              <ArrowBackIos className={classes.arrowBack} />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" flexDirection="row-reverse">
            <IconButton onClick={deleteNote}>
              <DeleteOutline className={classes.deleteButton} />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <TitleTextField id={`title-${id}`} label="Title" variant="outlined" value={title} onChange={handleTitleChange} />
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.contentInput}>
            <InputBase
              className={classes.contentInput}
              value={content}
              onChange={handleContentChange}

              placeholder="Write something..."
              inputProps={{ 'aria-label': 'naked' }}
              multiline
              rows={15}
              rowsMax={15}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}