import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
export default function List({ reciepe }) {
  return (
    <>
      <h2>All recipes</h2>
      <div className="d-flex flex-wrap w-100 justify-content-center">
        {reciepe.map((reciepe) => {
          return (
            <>
              <Card className="m-4 p-2" style={{ width: "15rem" }}>
                <Card.Img variant="top" src={reciepe.thumbnail_url} />
                <Card.Body>
                  <div>{reciepe.slug}</div>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
}
