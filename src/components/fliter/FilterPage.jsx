import React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { FilterContainer } from './FilterPageStyled'

function valuetext (value) {
  return `${value} Pag.`
}
const FilterPage = () => {
  return (
    <>
      <FilterContainer>
        <p>Filtrar por páginas</p>
        <Box sx={{ width: 300 }}>
          <Slider
            aria-label='Pages'
            defaultValue={30}
            getAriaValueText={valuetext}
            valueLabelDisplay='auto'
            color='success'
            step={10}
            min={40}
            max={2000}
          />

        </Box>
      </FilterContainer>
    </>
  )
}

export default FilterPage
