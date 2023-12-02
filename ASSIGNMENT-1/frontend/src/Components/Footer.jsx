import React from 'react';
import logonotion from '../Media/notionlogo.png';
import { FaInstagram, FaTwitter, FaLinkedinIn, FaFacebook, FaYoutube } from 'react-icons/fa';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/system';

const StyledFormControl = styled(FormControl)({
  margin: '8px',
  minWidth: '120px',
});

function Footer() {
  const [Language, setLanguage] = React.useState('');

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <>
      <div className="footer">
        <div className="coloumn-1">
          <img src={logonotion} alt="notion-logo" className="logo-pic" style={{ marginLeft: '30px' }}></img>
          <br />
          <span className="icon-container">
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaFacebook className="icon" />
            <FaYoutube className="icon" />
            <FaLinkedinIn className="icon" />
          </span>
          <StyledFormControl size="small">
            <InputLabel id="demo-select-small-label">ENGLISH</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={Language}
              label="English"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>ENGLISH US</MenuItem>
              <MenuItem value={20}>FRANCE</MenuItem>
              <MenuItem value={30}>GERMAN</MenuItem>
            </Select>
          </StyledFormControl>
        </div>
        <div className="coloumn-2">
          <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
            <li><b>Product</b>
              <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
                <li>Wikis</li>
                <li>Projects</li>
                <li>Docs</li>
                <li>Notion AI</li>
                <li>What’s new</li>
              </ul>
            </li>
            <li><b>Solutions</b>
              <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
                <li>Enterprise</li>
                <li>Small business</li>
                <li>Personal use</li>
                <li>Remote work</li>
                <li>Startups</li>
                <li>Education</li>
                <li>Nonprofits</li>
                <li>Engineering</li>
                <li>Product</li>
                <li>Design</li>
                <li>Managers</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="coloumn-2">
          <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
            <li><b>Product</b>
              <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
                <li>Wikis</li>
                <li>Projects</li>
                <li>Docs</li>
                <li>Notion AI</li>
                <li>What’s new</li>
              </ul>
            </li>
            <li><b>Solutions</b>
              <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
                <li>Enterprise</li>
                <li>Small business</li>
                <li>Personal use</li>
                <li>Remote work</li>
                <li>Startups</li>
                <li>Education</li>
                <li>Nonprofits</li>
                <li>Engineering</li>
                <li>Product</li>
                <li>Design</li>
                <li>Managers</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="coloumn-2">
          <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
            <li><b>Product</b>
              <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
                <li>Wikis</li>
                <li>Projects</li>
                <li>Docs</li>
                <li>Notion AI</li>
                <li>What’s new</li>
              </ul>
            </li>
            <li><b>Solutions</b>
              <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
                <li>Enterprise</li>
                <li>Small business</li>
                <li>Personal use</li>
                <li>Remote work</li>
                <li>Startups</li>
                <li>Education</li>
                <li>Nonprofits</li>
                <li>Engineering</li>
                <li>Product</li>
                <li>Design</li>
                <li>Managers</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
