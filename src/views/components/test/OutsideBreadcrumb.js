// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const OutsideBreadcrumb = () => {
  const handleClick = event => {
    event.preventDefault()
    console.info('You clicked a breadcrumb.')
  }

  return (
    <Box>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link href='/' onClick={handleClick}>
          MUI
        </Link>
        <Link href='/' onClick={handleClick}>
          Core
        </Link>
        <Typography>Breadcrumb</Typography>
      </Breadcrumbs>

      <Breadcrumbs separator='-' aria-label='breadcrumb'>
        <Link href='/' onClick={handleClick}>
          MUI
        </Link>
        <Link href='/' onClick={handleClick}>
          Core
        </Link>
        <Typography>Breadcrumb</Typography>
      </Breadcrumbs>

      <Breadcrumbs aria-label='breadcrumb' separator={<Icon icon='mdi:chevron-right' fontSize={20} />}>
        <Link href='/' onClick={handleClick}>
          MUI
        </Link>
        <Link href='/' onClick={handleClick}>
          Core
        </Link>
        <Typography>Breadcrumb</Typography>
      </Breadcrumbs>

      <Breadcrumbs aria-label='breadcrumb' sx={{ mt: 2, '& a': { display: 'flex', alignItems: 'center' } }}>
        <Link href='/' onClick={handleClick}>
          <Icon icon='mdi:home-outline' fontSize={20} />
          MUI
        </Link>
        <Link href='/' onClick={handleClick}>
          <Icon icon='mdi:bookmark-outline' fontSize={20} />
          Core
        </Link>
        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon icon='mdi:file-outline' fontSize={20} />
          Breadcrumb
        </Typography>
      </Breadcrumbs>
    </Box>
  )
}

export default OutsideBreadcrumb
