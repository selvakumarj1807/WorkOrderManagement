import { useState } from 'react';
import { FormControl, Grid, MenuItem, Select, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';

// project-imports
// import MainCard from './MainCard';

export default function Content() {
  const [year, setYear] = useState('');
  const [model, setModel] = useState('');
  const [make, setMake] = useState('');

  const handleChange = (event) => {
    setYear(event.target.value);
  };
  const handleChange1 = (event) => {
    setModel(event.target.value);
  };
  const handleChange2 = (event) => {
    setMake(event.target.value);
  };

  return (
    <div style={{ padding: '10px' }}>
      <div className='container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className='text' style={{ border: '4px solid black', padding: '20px', borderRadius: '10px', boxShadow: '5px 3px', maxWidth: '600px', width: '100%' }}>
          <h4 style={{ textAlign: 'center', fontWeight: '650' }}>Recycle Engine Market</h4>
          <hr style={{ marginTop: '3px' }} />
          <Grid container spacing={2.5} style={{ marginTop: '2px' }}>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    displayEmpty
                    id="demo-simple-select"
                    value={year}
                    onChange={handleChange}
                    sx={{ backgroundColor: 'white' }}
                  >
                    <MenuItem disabled value="" sx={{ color: 'text.secondary' }}>
                      Select Year
                    </MenuItem>
                    <MenuItem value={2024}>2024</MenuItem>
                    <MenuItem value={2023}>2023</MenuItem>
                    <MenuItem value={2022}>2022</MenuItem>
                    <MenuItem value={2021}>2021</MenuItem>
                    <MenuItem value={2020}>2020</MenuItem>
                    <MenuItem value={2019}>2019</MenuItem>
                    <MenuItem value={2018}>2018</MenuItem>
                    <MenuItem value={2017}>2017</MenuItem>
                    <MenuItem value={2016}>2016</MenuItem>
                    <MenuItem value={2015}>2015</MenuItem>
                    <MenuItem value={2014}>2014</MenuItem>
                    <MenuItem value={2013}>2013</MenuItem>
                    <MenuItem value={2012}>2012</MenuItem>
                    <MenuItem value={2011}>2011</MenuItem>
                    <MenuItem value={2010}>2010</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    displayEmpty
                    id="demo-simple-select"
                    value={make}
                    onChange={handleChange2}
                    sx={{ backgroundColor: 'white' }}
                  >
                    <MenuItem disabled value="" sx={{ color: 'text.secondary' }}>
                      Select Make
                    </MenuItem>
                    <MenuItem value={"AMC"}>AMC</MenuItem>
                    <MenuItem value={"Acura"}>Acura</MenuItem>
                    <MenuItem value={"Alfa"}>Alfa</MenuItem>
                    <MenuItem value={"Audi"}>Audi</MenuItem>
                    <MenuItem value={"BMW"}>BMW</MenuItem>
                    <MenuItem value={"Buick"}>Buick</MenuItem>
                    <MenuItem value={"Ford"}>Ford</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    displayEmpty
                    id="demo-simple-select"
                    value={model}
                    onChange={handleChange1}
                    sx={{ backgroundColor: 'white' }}
                  >
                    <MenuItem disabled value="" sx={{ color: 'text.secondary' }}>
                      Select Model
                    </MenuItem>
                    <MenuItem value={"Ambassador"}>Ambassador</MenuItem>
                    <MenuItem value={"American"}>American</MenuItem>
                    <MenuItem value={"Amx"}>Amx</MenuItem>
                    <MenuItem value={"Classic"}>Classic</MenuItem>
                    <MenuItem value={"RDX"}>RDX</MenuItem>
                    <MenuItem value={"RL"}>RL</MenuItem>
                    <MenuItem value={"RSX"}>RSX</MenuItem>
                    <MenuItem value={"147"}>147</MenuItem>
                    <MenuItem value={"GTV6"}>GTV6</MenuItem>
                    <MenuItem value={"Mito"}>Mito</MenuItem>
                    <MenuItem value={"A3"}>A3</MenuItem>
                    <MenuItem value={"A4"}>A4</MenuItem>
                    <MenuItem value={"Q3"}>Q3</MenuItem>
                    <MenuItem value={"R8"}>R8</MenuItem>
                    <MenuItem value={"RS3"}>RS3</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <div className="button" style={{
                fontStyle: "italic",
                fontWeight: "bold",
                fontSize: "16px",
                backgroundColor: "#0e2a47",
                border: "2px solid #0e2a47",
                padding: "10px",
                borderRadius: "10px",
                color: "#fff",
                textAlign: 'center'
              }}>
                <NavLink to="/partinformation" style={{ color: '#fff', textDecoration: 'none' }}>Submit</NavLink>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className='image' style={{ marginTop: '20px', width: '100%', display: 'flex', justifyContent: 'center' }}>
          <img style={{ maxWidth: "100%", borderRadius: '10px' }} src="https://car-images.bauersecure.com/wp-images/2434/03-ford-mustang.jpg" alt="" />
        </div>
      </div>
      <div className='partners' style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
        <span style={{ margin: '10px' }}>
          <img src="https://logohistory.net/wp-content/uploads/2023/01/Hyundai-Logo.png" alt="" style={{ maxWidth: '100px' }} />
        </span>
        <span style={{ margin: '10px' }}>
          <img src="https://logohistory.net/wp-content/uploads/2023/01/Audi-Symbol-1536x864.png" alt="" style={{ maxWidth: '100px' }} />
        </span>
        <span style={{ margin: '10px' }}>
          <img src="https://logohistory.net/wp-content/uploads/2023/01/Jaguar-Logo-2001-1536x864.png" alt="" style={{ maxWidth: '100px' }} />
        </span>
        <span style={{ margin: '10px' }}>
          <img src="https://logohistory.net/wp-content/uploads/2023/01/BMW-Emblem-1536x864.png" alt="" style={{ maxWidth: '100px' }} />
        </span>
        <span style={{ margin: '10px' }}>
          <img src="https://logohistory.net/wp-content/uploads/2023/01/Ford-Emblem-1536x864.png" alt="" style={{ maxWidth: '100px' }} />
        </span>
      </div>
    </div>
  );
}
