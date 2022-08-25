import React, { useEffect, useState } from "react";
import { Space, Table, Spin, Button } from "antd";
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

const csr = () => {
  const [customers, setCustomers] = useState([]);
  const router = useRouter();
  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = async () => {
    const data = await CustomerData.getAllCustomers();
    setCustomers(data.docs.map((doc) => ({ ...doc.data() })));
  };

  const data = customers;
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
        <h1 style={heading}>Client Side Rendering</h1>
        <div style={texts}>
          Simply, CSR(Client Side Rendering) means rendering pages directly in
          the browser using JavaScript.
          <br /> All logic, data fetching, routing etc are handled on the client{" "}
          rather than the server. <br />
          Most of the modern web development tools and libraries or frameworks
          <br />
          uses CSR. for example React JS, Vue JS, etc.
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
          Here, the table is rendered through CSR. <br />
          You can check the page source by clicking right <br /> on mouse and
          select
          <b> 'View Page Source'</b> <br /> but you cannot find the HTML tags
          related to table
        </div>
        <div style={table}>
          {customers.length === 0 ? (
            <Spin size="large" />
          ) : (
            <Table columns={columns} dataSource={data} />
          )}
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

export default csr;
