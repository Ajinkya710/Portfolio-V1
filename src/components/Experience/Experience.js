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
                            sx={{ borderLeft: 1, borderColor: 'divider', paddingTop: '25px' }}
                        >
                            <Tab className="dHdZWh" label="University of Wollongong" />
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
                                    <li>Built and maintained website for SUNRISE Study.</li>
                                    <li>Created new web pages, functions and log in areas for authorized members to access documents and files.</li>
                                    <li>Developed Python codes for automated data reporting in the SUNRISE Study, which led to a 60% reduction
                                        in time spent on preparing reports for 64 countries. Some unique reporting for individual countries is also
                                        required for their requirements or for grant funding.</li>
                                    <li>Daily support for the Data Management team including updating checklist files for data collected, adding
                                        translations to REDCap databases for individual countries and responding to requests from countries.</li>
                                    <li>Developed a SQL database (front and back end) for handling data across all countries for the SUNRISE International
                                        Study for future use of data, which involved understanding the data and designing the database
                                        tables on that data.</li>
                                    <li>Support research team with developing Standard Operating Procedures, data collection tools, communication
                                        with data collection teams, data cleaning and reporting.</li>
                                </ul></div>
                        </TabPanel>

                        <TabPanel value={value} index={1}>
                            <div className='QgHxr'>
                                <h3>
                                    <span>Software Engineer</span>&nbsp;@&nbsp;<a className='company_link' href="https://www.tcs.com/" rel="noopener noreferrer" target="_blank">Tata Consultancy Services</a>
                                </h3>
                                <p>September 2016 - January 2022</p>
                                <p><strong>VSE FCAPS Team: Worked on multiple domains of the ATCA (Advanced Telecommunications Computing Architecture) based VSE (Versatile Service Engine) System.</strong></p>
                                <ul>
                                    <li>Developed a range of development features that involved Data Manager, ALARM module, features related
                                        to Security(AAA), and Backup and Restore domain focusing on the project’s baseline deliverables while ensuring
                                        the maintenance of a High Availability SLA.</li>
                                    <li>Developed CLI (Command Line Interface) commands for the new features to be accessible to end users.</li>
                                    <li>Maintained the proprietary Solid DB and SQL database of the VSE system.</li>
                                    <li>Proficiently resolved assigned issues (TRs - Trouble Requests) through the MHWeb system, delivering
                                        prompt and effective resolutions.</li>
                                    <li>Collaborated with cross-functional teams to design, develop code modules, execute comprehensive test
                                        planning and actively engaging in code reviews before VSE baseline delivery.</li>
                                    <li>Worked with the team on a couple of POC(Proof Of Concept) to the clients, successfully resolving longstanding
                                        issues within the VSE system and improving the efficiency of the data manager component.</li>
                                    <li>Contributed to the development of seamless communication channel and messaging between between
                                        the proprietary CBM(Core Billing Module) and the enhanced Cloud based CBM(CCBM) of the VSE system.</li>
                                </ul></div>
                        </TabPanel>
                    </Box>
                </div>
            </div>
        </div>
    );
}