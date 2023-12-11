import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SidebarDash from "./SideBar";
import Headers from "../Components/Header";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ScholarshipCard = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="container-fuild">
        <div className="row">
          <div className="col-2">
            <SidebarDash></SidebarDash>
          </div>
          <div className="col-10 mt-5">
          <Headers page="Schlorship"></Headers>
            <div className="row text-center mt-3" >
              <div className="col-4 ">
               
                <Card sx={{ maxWidth: 345 }} style={{marginLeft:30}}>
                  <CardHeader
                    avatar={
                      <Avatar
                        sx={{ bgcolor: "#1976D2" }}
                        aria-label="scholarship"
                      >
                        S
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Academic Excellence Scholarship"
                    subheader="Provider: Education Foundation"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Recognizing outstanding academic achievements. Top 5%
                      students are eligible for this scholarship.
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>
                        Application Deadline: December 31, 2023
                      </Typography>
                      <Typography paragraph>
                        Eligibility: Top 5% students
                      </Typography>
                      <Typography paragraph>
                        This scholarship recognizes outstanding academic
                        achievements. Students in the top 5% of their class are
                        eligible to apply.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </div>
              <div className="col-4">
               
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    avatar={
                      <Avatar
                        sx={{ bgcolor: "#1976D2" }}
                        aria-label="scholarship"
                      >
                        S
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Academic Excellence Scholarship"
                    subheader="Provider: Education Foundation"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Recognizing outstanding academic achievements. Top 5%
                      students are eligible for this scholarship.
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>
                        Application Deadline: December 31, 2023
                      </Typography>
                      <Typography paragraph>
                        Eligibility: Top 5% students
                      </Typography>
                      <Typography paragraph>
                        This scholarship recognizes outstanding academic
                        achievements. Students in the top 5% of their class are
                        eligible to apply.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </div>
              <div className="col-4">
              
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    avatar={
                      <Avatar
                        sx={{ bgcolor: "#1976D2" }}
                        aria-label="scholarship"
                      >
                        S
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Academic Excellence Scholarship"
                    subheader="Provider: Education Foundation"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Recognizing outstanding academic achievements. Top 5%
                      students are eligible for this scholarship.
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>
                        Application Deadline: December 31, 2023
                      </Typography>
                      <Typography paragraph>
                        Eligibility: Top 5% students
                      </Typography>
                      <Typography paragraph>
                        This scholarship recognizes outstanding academic
                        achievements. Students in the top 5% of their class are
                        eligible to apply.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScholarshipCard;
