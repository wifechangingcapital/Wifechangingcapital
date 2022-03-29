import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import loadingIcon from 'assets/images/loading_icon.jpg'
import * as React from 'react'
import { Link } from 'react-scroll'

const options = ['close']

const ITEM_HEIGHT = 24

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const divRef = React.useRef(null)
  function handleClick() {
    setAnchorEl(divRef.current)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined
  return (
    <div ref={divRef}>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <img src={loadingIcon} alt="icon"></img>
      </IconButton>
      <Menu
        id={id}
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <>
            <MenuItem>
              <Link to="home" spy={true} smooth={true}>
                <div>Home</div>
              </Link>
            </MenuItem>

            <MenuItem>
              <Link to="Tokenomics" spy={true} smooth={true}>
                <div>Tokenomics</div>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="TeamSection" spy={true} smooth={true}>
                <div>Team</div>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="Timeline" spy={true} smooth={true}>
                <div>Roadmap</div>
              </Link>
            </MenuItem>
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
              {option}
            </MenuItem>
          </>
        ))}
      </Menu>
    </div>
  )
}
