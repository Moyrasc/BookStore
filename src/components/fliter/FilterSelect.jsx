import React from 'react'
import Box from '@mui/material/Box'

import FormControl from '@mui/material/FormControl'
import NativeSelect from '@mui/material/NativeSelect'
import { ContainerSelect } from './FilterSelectStyled'

export default function NativeSelectDemo ({ setGenreFilter }) {
  const handleGenreChange = (event) => {
    setGenreFilter(event.target.value)
  }

  return (
    <ContainerSelect>
      <p>Filtrar por género</p>
      <Box sx={{
        minWidth: 120,
        paddingBottom: 4
      }}
      >
        <FormControl>
          <NativeSelect
            defaultValue=''
            onChange={handleGenreChange}
            sx={{
              width: 200
            }}
            inputProps={{
              name: 'genre',
              id: 'genre-filter'
            }}
          >
            <option value=''>Todos</option>
            <option value='Fantasía'>Fantasía</option>
            <option value='Ciencia ficción'>Ciencia ficción</option>
            <option value='Terror'>Terror</option>
            <option value='Zombies'>Zombies</option>
          </NativeSelect>
        </FormControl>
      </Box>
    </ContainerSelect>
  )
}
