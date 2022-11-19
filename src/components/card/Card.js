import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Card } from "react-bootstrap";

function Cardd(props) {
  if(props.feature){
    return (
      <Card style={{ width: "18rem"}} className="shadow mb-5 mx-4">
        <Card.Img
          variant="top"
          src="https://jubilantconsumer.com/wp-content/themes/jubilant/assets/img/product.png"
        />
        <Card.Body>
          <div className="mb-3 d-flex flex-row justify-content-between align-items-start">
            <div>
              <div className="fs-4">Title of the product.</div>
              <Card.Title>10,000</Card.Title>
            </div>
            <div className="pt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-suit-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
              </svg>
            </div>
          </div>
          <div className="fs-6 fw-light">
            <div>DHA, PHASE 9, North Karachi</div>
            <div>4 days ago</div>
          </div>
        </Card.Body>
        <div className="bg-warning text-dark text-center position-absolute top-0 start-50 translate-middle badge rounded-pill">featured</div>
      </Card>
    );
  }else{
    return (
      <Card style={{ width: "18rem"}} className="shadow mb-5 mx-4">
        <Card.Img
          variant="top"
          src="https://jubilantconsumer.com/wp-content/themes/jubilant/assets/img/product.png"
        />
        <Card.Body>
          <div className="mb-3 d-flex flex-row justify-content-between align-items-start">
            <div>
              <div className="fs-4">Title of the product.</div>
              <Card.Title>10,000</Card.Title>
            </div>
            <div className="pt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-suit-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
              </svg>
            </div>
          </div>
          <div className="fs-6 fw-light">
            <div>DHA, PHASE 9, North Karachi</div>
            <div>4 days ago</div>
          </div>
        </Card.Body>
       </Card>
    );
  }
  
}

export default Cardd;