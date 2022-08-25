import { useState } from "react";
import { Button } from "antd";
import { useRouter } from "next/router";

function WelcomePage({ Component, pageProps }) {
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const handleMouseEnter1 = () => {
    setIsHovering1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovering1(false);
  };
  const handleMouseEnter2 = () => {
    setIsHovering2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovering2(false);
  };
  const handleMouseEnter3 = () => {
    setIsHovering3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovering3(false);
  };
  const router = useRouter();
  const container = {
    marginTop: "40px",
  };
  const heading = {
    textAlign: "center",
    marginBottom: "100px",
  };
  const card1 = {
    boxShadow: isHovering1
      ? "0 8px 16px 0 rgba(0,0,0,0.2)"
      : "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    width: "30%",
    height: "52vh",
  };
  const card2 = {
    boxShadow: isHovering2
      ? "0 8px 16px 0 rgba(0,0,0,0.2)"
      : "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    width: "30%",
    height: "52vh",
  };
  const card3 = {
    boxShadow: isHovering3
      ? "0 8px 16px 0 rgba(0,0,0,0.2)"
      : "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    width: "30%",
    height: "52vh",
  };
  const cardInfo = {
    marginTop: "20px",
    padding: "2px 16px",
    display: "flex",
    justifyContent: "space-between",
  };
  const cardContainer = {
    display: "flex",
    justifyContent: "space-around",
  };
  const imageWrapper = {
    border: "1px solid green",
    height: "35vh",
  };
  const info = {
    textAlign: "center",
    marginTop: "20px",
  };

  return (
    <>
      <div style={container}>
        <h2 style={heading}>Please Choose One for the demo</h2>
        <div style={cardContainer}>
          <div
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
            style={card1}
          >
            <div style={imageWrapper}>
              <img
                src="./server-side-rendering.png"
                alt="SSR"
                height={"100%"}
                width={"100%"}
              />
            </div>
            <div style={cardInfo}>
              <div>
                <h3>
                  <b>SSR</b>
                </h3>
                <h4>Server Side Rendering</h4>
              </div>
              <div>
                <Button
                  onClick={() => {
                    router.push("/ssr");
                  }}
                  type="danger"
                >
                  View Demo
                </Button>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
            style={card2}
          >
            <div style={imageWrapper}>
              <img
                src="./no-pre-rendering.png"
                alt="SSR"
                height={"100%"}
                width={"100%"}
              />
            </div>
            <div style={cardInfo}>
              <div>
                <h3>
                  <b>CSR</b>
                </h3>
                <h4>Client Side Rendering</h4>
              </div>
              <div>
                <Button
                  onClick={() => {
                    router.push("/csr");
                  }}
                  type="danger"
                >
                  View Demo
                </Button>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={handleMouseEnter3}
            onMouseLeave={handleMouseLeave3}
            style={card3}
          >
            <div style={imageWrapper}>
              <img
                src="./static-generation.png"
                alt="SSR"
                height={"100%"}
                width={"100%"}
              />
            </div>
            <div style={cardInfo}>
              <div>
                <h3>
                  <b>SSG</b>
                </h3>
                <h4>Static Site Generation</h4>
              </div>
              <div>
                <Button
                  onClick={() => {
                    router.push("/ssg");
                  }}
                  type="danger"
                >
                  View Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div style={info}>
          You can Update/ADD the database From here and see the results &nbsp;
          <Button
            onClick={() => {
              router.push("/add");
            }}
            type="secondary"
          >
            Go to Database
          </Button>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
