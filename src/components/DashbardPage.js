import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button } from "antd";

const DashbardPage = () => {
  return (
    <div>
      <main style={{ width: "80%", marginLeft: "auto", marginTop: "20px" }}>
        <Grid
          container
          spacing={0}
          style={{ height: "100vh" }}
          className="dashboard-main"
        >
          <Grid item xs={12} className="dashboard-bg">
            <div>
              <h1>Add Prodct</h1>
              <p style={{fontSize:"20px",width:"400px"}}>
                Get closer to your first sale by adding products, or import your
                existing product inventory.
              </p>

              <Button type="primary">Add Product</Button>
            </div>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default DashbardPage;
