"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import "./card.css";
export default function MediaCard(props: any) {
  const { data } = props;
  return (
    <Card sx={{ maxWidth: 245 }}>
      <Link href={`/detail/${data.item_id}`}>
        <CardMedia component="img" image={data.img_url} />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.item_name}
        </Typography>
        <Typography
          style={{
            maxHeight: "2.5rem",
            overflow: "hidden",
          }}
          variant="body2"
          className="description-after"
          color="text.secondary"
        >
          {data.description == ""
            ? "Unfortunatly we are unable to get description for this Recipe click read more to see instrctions for this recipe"
            : data.description}
        </Typography>
        <Typography variant="caption">Cook time-{data.cook_time}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link
            style={{ textDecoration: "none", textTransform: "capitalize" }}
            href={`/detail/${data.item_id}`}
          >
            Detail
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
