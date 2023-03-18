import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion style={{ boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>We connect our customers with the best?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum dolor sit amet.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>We connect our customers with the best?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum dolor sit amet.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>We connect our customers with the best?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum dolor sit amet.</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
