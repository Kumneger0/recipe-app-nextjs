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
  const [selectedBtn, setSelectedBtn] = React.useState<string>("instructions");
  const stickeItemRef = React.useRef();
  const stickeItemCardRef = React.useRef();
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      /* @ts-ignore*/
      const domRect = stickeItemCardRef?.current.getBoundingClientRect();
      console.log(domRect);
      /* @ts-ignore*/
      if (innerWidth > 990) return;
      if (domRect.top > 50) {
        // @ts-ignore
        stickeItemRef.current.style.position = "static";
        return;
      }
      //@ts-ignore
      stickeItemRef.current.style.position = "fixed";
      //@ts-ignore
      stickeItemRef.current.style.top = "47px";
    });
  }, []);
  return (
    <Box
      style={{ width: "100%", height: innerWidth <= 980 ? "auto" : "500px" }}
      sx={{ minWidth: 275 }}
    >
      {/* @ts-ignore*/}
      <Card ref={stickeItemCardRef} className="cardWrapper" variant="outlined">
        <React.Fragment>
          {/* @ts-ignore*/}
          <div ref={stickeItemRef} className="detail-control">
            <Typography
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-around",
              }}
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
          </div>
          <CardContent>
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
