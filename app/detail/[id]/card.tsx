import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./card.css";
import ReactPlayer from "react-player";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function OutlinedCard(props: any) {
  const [selectedBtn, setSelectedBtn] = React.useState<string>("Video");
  return (
    <Box style={{ width: "100%", height: "500px" }} sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography
              className="detail-control"
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <Button
                onClick={() => setSelectedBtn("instructions")}
                variant="outlined"
              >
                Instructions
              </Button>
              <Button
                onClick={() => setSelectedBtn("Nutrition")}
                variant="outlined"
              >
                Nutrition
              </Button>
              <Button
                onClick={() => setSelectedBtn("Video")}
                variant="outlined"
              >
                Video
              </Button>
            </Typography>
            <Typography variant="h5" component="div">
              {selectedBtn == "instructions" &&
                props.data.instruction.map((ins: any, i: number) => {
                  return (
                    <div className="m-3" key={ins.id}>
                      <span className="fs-5">{`step ${i + 1}`}</span>
                      <div>{ins.display_text}</div>
                    </div>
                  );
                })}
            </Typography>
            <Typography sx={{ mb: 1.5 }} component="div">
              {selectedBtn == "Nutrition" && (
                <div>
                  <div className="nutrition fs-3 w-100">nutrition</div>
                  <div className="w-100 d-flex justify-content-center flex-column">
                    {Object.keys(props.data?.nutrition).length > 0 ? (
                      Object.keys(props.data?.nutrition)
                        .sort()
                        .map((key: string, i: number) => {
                          if (key == "updated_at") return;
                          return (
                            <>
                              <div
                                key={i}
                              >{`${key} ${props.data?.nutrition[key]}g`}</div>
                            </>
                          );
                        })
                    ) : (
                      <div>
                        Unfortunatly we are unable to get Nutriton information
                        for This Recipe{" "}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </Typography>
            <Typography variant="body2">
              {selectedBtn == "Video" && (
                <div>
                  <div>
                    <ReactPlayer
                      url={props.data.video}
                      width="640"
                      controls={true}
                      pip={true}
                    />
                  </div>
                </div>
              )}
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}

// const card = (
//   <React.Fragment>
//     <CardContent>
//       <Typography
//         className="detail-control"
//         sx={{ fontSize: 14 }}
//         color="text.secondary"
//         gutterBottom
//       >
//         <Button variant="outlined">Instructions</Button>
//         <Button variant="outlined">Nutrition</Button>
//         <Button variant="outlined">Video</Button>
//       </Typography>
//       <Typography variant="h5" component="div">
//         {JSON.stringify(props.data)}
//       </Typography>
//       <Typography sx={{ mb: 1.5 }} color="text.secondary">
//         adjective
//       </Typography>
//       <Typography variant="body2">
//         well meaning and kindly.
//         <br />
//         {'"a benevolent smile"'}
//       </Typography>
//     </CardContent>
//     <CardActions>
//       <Button size="small">Learn More</Button>
//     </CardActions>
//   </React.Fragment>
// );
