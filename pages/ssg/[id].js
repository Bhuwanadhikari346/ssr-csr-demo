import CustomerData from "../../services/customer";

export async function getStaticPaths() {
  const res = await CustomerData.getAllCustomers();

  return {
    paths: res.docs.map((doc) => ({
      params: { id: doc.id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await CustomerData.getCustomer(params.id);

  return {
    props: {
      data: res?.data(),
    },
  };
}

function SsgDetail({ data }) {
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
          <h2>{data?.name}</h2>
          <h3>{data?.address}</h3>
          <h4>{data?.age}</h4>
          <h4>{data?.phone}</h4>
        </div>
      </div>
    </>
  );
}

export default SsgDetail;
