import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Experience.css'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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

// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
// };


export default function Experience() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div id='experience'>
            <div className='main' >
                <div className=' content' >
                    <h1 className='experience_heading'>Where I’ve Worked</h1>
                    <Box
                        sx={{ flexGrow: 1, display: 'flex', height: 350 }}
                    >
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            sx={{ borderLeft: 1, borderColor: 'divider', paddingTop:'25px'}}
                        >
                            <Tab className="dHdZWh" label="University of Wollongong" />
                            <Tab className="dHdZWh" label="Smart Champs" />
                            <Tab className="dHdZWh" label="Tata Consultancy Services" />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <div className='QgHxr'>
                                <h3>
                                    <span>Analyst/Programmer</span>&nbsp;@&nbsp;<a className='company_link' href="https://www.uow.edu.au/" rel="noopener noreferrer" target="_blank">University of Wollongong</a>
                                </h3>
                                <p >June 2021 - Present</p>
                                <p><strong>Sunrise-Study: An International Study Project of Movement Behaviors in the children.</strong></p>
                                <ul>
                                    <li>Develop and maintain the SUNRISE Study website.</li>
                                    <li>Creating new pages and functions, and secured log in areas for authorized members to access documents and so on.</li>
                                    <li>Develop Python codes for automated data reporting to give visualization and insights into data collected in the SUNRISE Study in 64 countries.</li>
                                    <li>Daily support for the Data Management team including updating checklist files for data collected, adding translations to REDCap databases for individual countries and responding to requests from countries.</li>
                                    <li>Develop SQL database (front and back end) consisting of all countries data for future use.</li>
                                </ul></div>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <div className='QgHxr'>
                                <h3>
                                    <span>Website Developer</span>&nbsp;@&nbsp;<a className='company_link'>Smart Champs</a>
                                </h3>
                                <p>April 2020 - September 2020</p>
                                <ul>
                                    <li>Online website to test the aptitude of students and arranging consultancy programs for their guidance and skill development.</li>
                                    {/* <li>Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API integrations</li>
                                    <li>Architected and implemented the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback</li>
                                    <li>Contributed extensively to the creation of MusicKit JS, a public-facing JavaScript SDK for embedding Apple Music players into web applications</li> */}
                                </ul></div>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <div className='QgHxr'>
                                <h3>
                                    <span>Software Engineer</span>&nbsp;@&nbsp;<a className='company_link' href="https://www.tcs.com/" rel="noopener noreferrer" target="_blank">Tata Consultancy Services</a>
                                </h3>
                                <p>September 2016 - January 2022</p>
                                <p><strong>VSE FCAPS Team: Worked on multiple domains of the ATCA (Advanced Telecommunications Computing Architecture) based VSE (Versatile Service Engine) System.</strong></p>
                                <ul>
                                    <li>Coding a range of development features that involved Data Manager, ALARM module, and features focused on the Security/Backup and Restore domain.</li>
                                    <li>Developing CLI (Command Line Interface) commands and maintaining the proprietary IBM SOLID Database within the VSE system.</li>
                                    <li>Effectively address assigned issues (TRs – Trouble Requests) through the MH Web system, and providing timely fixes.</li>
                                    <li>Collaboration with cross-functional teams to design, develop code modules, execute comprehensive test planning and actively engaging in code reviews before VSE baseline delivery.</li>
                                    <li>Worked on CCBM which is a cloud platform for Core Billing Module in the system to enable communication between Proprietary VSE system to newly enhanced Cloud VSE system.</li>
                                </ul></div>
                        </TabPanel>
                    </Box>
                </div>
            </div>
        </div>
    );
}