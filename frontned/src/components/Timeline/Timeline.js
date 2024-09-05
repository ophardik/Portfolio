import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Event } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const TimeLine = () => {
  // Static data for demonstration
  const timelines = [
    {
      _id: "1",
      title: "Project E=Commerce",
      description: "Initiated the project with initial planning and team meetings.",
      date: new Date("2024-01-01"),
    },
    {
      _id: "2",
      title: "Design Phase Completed",
      description: "Finished the design phase with all mockups and wireframes approved.",
      date: new Date("2024-03-15"),
    },
    {
      _id: "3",
      title: "Development Started",
      description: "Commenced the development of core features and functionalities.",
      date: new Date("2024-06-30"),
    },
  ];

  return (
    <div>
      <Timeline position="alternate">
        {timelines.map((item) => (
          <TimelineItem key={item._id}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              {item.date.toString().split("T")[0]}
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <Event />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography>{item.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimeLine;
