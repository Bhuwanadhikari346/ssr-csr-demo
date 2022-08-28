import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import { useRouter } from "next/router";
import CustomerData from "../../services/customer";
function CsrDetail() {
  const router = useRouter();
  const id = router?.asPath?.replace("/csr/", "");
  const [singleCustomer, setSingleCustomer] = useState([]);

  const getUser = async () => {
    try {
      const docSnap = await CustomerData.getCustomer(id);
      setSingleCustomer(docSnap?.data());
    } catch (err) {
      alert(err.message);
    } finally {
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  if (singleCustomer?.length === 0) {
    return (
      <Spin
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
        size="large"
      />
    );
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ textAlign: "center", margin: "20px" }}>User Detail</h1>
        <div
          style={{
            background: "lightgray",
            height: "200px",
            borderRadius: "5px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h2>{singleCustomer?.name}</h2>
          <h3>{singleCustomer?.address}</h3>
          <h4>{singleCustomer?.age}</h4>
          <h4>{singleCustomer?.phone}</h4>
        </div>
      </div>
    </>
  );
}

export default CsrDetail;
