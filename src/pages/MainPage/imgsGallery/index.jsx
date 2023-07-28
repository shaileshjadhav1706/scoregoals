import React, { useEffect, useRef } from 'react';
import ImageGallery from './LightGallery';
import { Tabs, Tab, Typography, Box } from '@mui/material';
import Heading from '../../../components/heading';
import { training, inhouseTournaments, otherTournaments } from "./images";

const Gallery = () => {
  const galleryRef = useRef();

  useEffect(() => {
    setInterval(() => {
      const parent = galleryRef.current?.querySelector('#ReactGridGallery');
      if(parent){
        const childElement = parent.lastChild;
        childElement.style.justifyContent = 'center';
      }
      
    }, 100)
  }, []);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <div>
      <div className='flex justify-center'>
        <Heading title="GALLERY" />
      </div>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          display: 'flex',
          justifyContent: 'center',
          overflow: 'auto'
        }}
      >
        <Tabs
          value={value}
          variant="scrollable"
          onChange={handleChange}
          scrollButtons="auto"
          aria-label="basic tabs example"
        >
          <Tab label="Training" {...a11yProps(0)} />
          <Tab label="Inhouse tournaments" {...a11yProps(1)} />
          <Tab label="Other tournaments" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <div ref={galleryRef}>
        <TabPanel value={value} index={0}>
            {/* Apply the style to this ImageGallery component */}
            <ImageGallery images={training} />
        </TabPanel>
        <TabPanel value={value} index={1}>
            {/* Apply the style to this ImageGallery component */}
            <ImageGallery images={inhouseTournaments} />
        </TabPanel>
        <TabPanel value={value} index={2}>
            {/* Apply the style to this ImageGallery component */}
            <ImageGallery images={otherTournaments} />
        </TabPanel>
      </div>
    </div>
  );
};

export default Gallery;