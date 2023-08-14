import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { FilterContainer } from './FilterPageStyled'
import { useEffect, useState } from 'react'

const FilterPage = ({ setPagesFilter }) => {
  const [sliderValue, setSliderValue] = useState(40)

  useEffect(() => {
    setPagesFilter(sliderValue)
  }, [sliderValue, setPagesFilter])

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue)
  }
  const valuetext = (value) => {
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
            onChange={handleSliderChange}
            step={10}
            min={40}
            max={1200}
            sx={{
              color: '#0e4749',
              paddingTop: 5
            }}
          />
        </Box>
      </FilterContainer>
    </>
  )
}

export default FilterPage
