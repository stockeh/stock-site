import React from 'react';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

import nvidia from '../assets/experience/media/nvidia.svg';
import maxar from '../assets/experience/media/maxar.svg';
import csu from '../assets/experience/media/csu.svg';
import boeing from '../assets/experience/media/boeing.svg';

import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

import './Experience.css';

function AutoTimelineItem({ data }) {
  return (
    <div>
      <TimelineItem>
        <TimelineOppositeContent
          className='experience-timeline-opposite-content'
        >
          {data.year}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className='timeline-dot' variant='outlined'>
            <img className='timeline-logo' src={data.logo} alt='logo' />
          </TimelineDot>
          <TimelineConnector id={data.company} className='experience-timeline-connector'/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '8px', px: 2, paddingBottom: '30px' }}>
          <Typography variant='h6' component='span'>
            {data.company}
          </Typography>
          <Typography variant='subtitle1'>
            <i>{data.position}</i>
          </Typography>
          <Typography variant='body1'>{data.description}</Typography>
        </TimelineContent>
      </TimelineItem>
    </div>
  );
}

function Experience() {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      <AutoTimelineItem
        data={{
          year: '11.2023 - 02.2024',
          company: 'NVIDIA',
          logo: nvidia,
          position: 'Research Intern',
          description: <>Machine learning for global climate and weather modeling.</>,
        }}
      />
      <AutoTimelineItem
        data={{
          year: '05.2023 - 08.2023',
          company: 'Maxar Technologies',
          logo: maxar,
          position: 'Research Intern',
          description: (
            <>
              Large-scale machine learning to emulate atmospheric compensation, using neural
              networks to correct lightwave scattering as seen in high-resolution satellite imagery.
            </>
          ),
        }}
      />
      <AutoTimelineItem
        data={{
          year: '06.2020 - Current',
          company: 'Colorado State University',
          logo: csu,
          position: 'Graduate Research Assistant',
          description: (
            <>
              Fundamental research in machine learning, surrounding attention-based neural networks
              and explainable AI. Applications in radar prediction, tropical cyclones intensity
              estimation, correcting numerical weather prediction, and finding indicators of climate
              change.
            </>
          ),
        }}
      />
      <AutoTimelineItem
        data={{
          year: '06.2018 - 11.2019',
          company: 'Boeing',
          logo: boeing,
          position: 'Software Engineer Intern',
          description: (
            <>
              Cloud notification system delivering Notice to Air Missions (NOTAMs), implementing
              RESTful APIs utilizing Microsoft Azure with fully automated functional, integration,
              and performance test suites.
            </>
          ),
        }}
      />
    </Timeline>
  );
}

export default Experience;