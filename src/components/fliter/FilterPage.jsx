import React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { FilterContainer } from './FilterPageStyled'

const FilterPage = ({ setPagesFilter }) => {
  const valuetext = (value) => {
    setPagesFilter(value)
    return `${value} Pag.`
  }
  return (
    <>
      <FilterContainer>
        <p>Filtrar por páginas</p>
        <Box sx={{ width: 200 }}>
          <Slider
            aria-label='Pages'
            defaultValue={40}
            getAriaValueText={valuetext}
            valueLabelDisplay='auto'
            color='success'
            step={10}
            min={40}
            max={1200}
          />

        </Box>
      </FilterContainer>
    </>
  )
}

export default FilterPage
