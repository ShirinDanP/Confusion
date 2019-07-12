import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

export class DishDetail extends React.Component {
  render() {
    const { dish } = this.props;
    if (dish !== null) {
      return (
        <div className="row">
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    }

    return <div />;
  }
}

export default DishDetail;
