import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Button } from "antd";
import { useRouter } from "next/router";
import CustomerData from "../../services/customer";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Button
          onClick={() => {
            router.push("/");
          }}
          type="danger"
        >
          Details
        </Button>
      </Space>
    ),
  },
];

export async function getStaticProps() {
  const res = await CustomerData.getAllCustomers();

  return {
    props: {
      data: res.docs.map((doc) => ({ ...doc.data() })),
    },
  };
}

const Ssg = ({ data }) => {
  const router = useRouter();
  const heading = {
    textAlign: "center",
    marginTop: "40px",
  };
  const texts = {
    textAlign: "center",
    lineHeight: "28px",
    fontSize: "22px",
  };
  const info = {
    textAlign: "center",
    marginTop: "20px",
  };

  const table = {
    marginTop: "50px",
    width: "50%",
  };
  const divider = {
    display: "flex",
    justifyContent: "space-around",
  };
  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
    paddingBottom: "40px",
  };

  return (
    <>
      <div>
        <h1 style={heading}>Static Site Generation</h1>
        <div style={texts}>
          SSG(Static Site Generation) is pre-rendering your React app into HTML
          at build time. <br />
          In short, SSG will make the HTML pages out of a React app at the
          <br /> build time so it doesn&apos;t have to do it for every request,
          <br />
          and neither does the browser have to do it on the client-side.
          <br /> It is even faster than SSR
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
      <div style={divider}>
        <div style={{ marginTop: "50px" }}>
          <span style={{ fontSize: "50px" }}>...</span>
          <br />
          Here, the page is rendered through SSG. <br />
          SSG works same as SSR in development mode. <br /> It will create
          static pages durung <b>build time</b>
          <br />
          but the major drawback of <b>SSG</b> is, when
          <br />
          database is updated or added then it will <br />
          not update on the page because it is <br />
          statically generated during build time
        </div>
        <div style={table}>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
      <div style={buttonStyle}>
        <Button
          onClick={() => {
            router.push("/");
          }}
          type="primary"
        >
          Go Home
        </Button>
      </div>
    </>
  );
};

export default Ssg;
