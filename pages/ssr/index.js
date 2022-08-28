import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Button } from "antd";
import { useRouter } from "next/router";
import CustomerData from "../../services/customer";

export async function getServerSideProps() {
  const res = await CustomerData.getAllCustomers();

  return {
    props: {
      data: res.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
    },
  };
}

const Ssr = ({ data }) => {
  const router = useRouter();

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
      dataIndex: "id",
      key: "id",
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => {
              router.push(`/ssr/${record.id}`);
            }}
            type="danger"
          >
            Details
          </Button>
        </Space>
      ),
    },
  ];
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
        <h1 style={heading}>Server Side Rendering</h1>
        <div style={texts}>
          Simply, SSR(Server Side Rendering) means page is generated each time
          the server gets a request. <br />
          In SSR you will see all the HTML tags related to page during each
          request.
          <br /> In Next JS you are always doing SSR by default.
        </div>
        <div style={info}>
          We can also choose CSR in Next JS also because it supports several
          features like SSR or CSR
        </div>
      </div>
      <div style={divider}>
        <div style={{ marginTop: "50px" }}>
          <span style={{ fontSize: "50px" }}>...</span>
          <br />
          Here, the page is rendered through SSR. <br />
          You can check the page source by clicking right <br /> on mouse and
          select
          <b> View Page Source</b> <br /> and you can find all the HTML tags
          related <br />
          to the page as well as table because it is
          <br /> rendered through server
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

export default Ssr;
