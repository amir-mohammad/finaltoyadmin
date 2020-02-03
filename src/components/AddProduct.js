import React, { useState } from "react";
import { Container, Grid, Paper, Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Button, Input, Select } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.core.css";
import PicturesWall from "../utilcomponents/PicturesWall";
import Varient from '../utilcomponents/Varient';

const AddProduct = () => {
  const [editText, setEditText] = useState("");
  const [count,setCount] = useState([]);
  const { Option } = Select;
  const moduless = {
    toolbar: [
      [{ header: [1, 2, false] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" }
      ],
      ["link", "image"],
      [{ direction: "rtl" }],

      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ["clean"]
    ]
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "direction",
    "size",
    "color",
    "font",
    "align"
  ];

  const onSubmit = e => {
    e.preventDefault();
  };
  const ClickHandlerOption = () =>{
      setCount([...count,1]);
  }
  return (
    <div>
      <main style={{ width: "80%", marginLeft: "auto", marginTop: "50px" }}>
        <Container>
          <form method="post" enctype="multipart/form-data" onSubmit={onSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <h3>
                  <Link style={{ color: "gray" }} to="/admin/product">
                    {"< Previous"}
                  </Link>
                </h3>
                <h1>Add Product</h1>
              </Grid>
              <Grid
                item
                xs={6}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end"
                }}
              >
                <div style={{ textAlign: "right" }}>
                  <Button type="default" style={{ marginRight: "10px" }}>
                    Discard
                  </Button>
                  <Button type="primary" htmlType="submit">
                    Save
                  </Button>
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid item xs={8}>
                <Paper
                  elevation={3}
                  style={{ padding: "50px", paddingBottom: "100px" }}
                >
                  <label style={{ fontWeight: "400" }}> Title</label>
                  <Input
                    name="title"
                    placeholder="Enter Title"
                    style={{ marginTop: "15px", marginBottom: "15px" }}
                  />

                  <label style={{ fontWeight: "400" }}> Description</label>
                  <ReactQuill
                    style={{ marginTop: "15px", height: "300px" }}
                    modules={moduless}
                    formats={formats}
                    theme="snow"
                  />
                </Paper>
                <Paper
                  style={{ marginTop: "25px", padding: "50px" }}
                  elevation={3}
                >
                  <h3 style={{ fontWeight: "600" }}>Images</h3>
                  <PicturesWall />
                </Paper>
                <Paper
                  style={{ marginTop: "25px", padding: "50px" }}
                  elevation={3}
                >
                  <h3 style={{ fontWeight: "600", paddingBottom: "30px" }}>
                    Pricing
                  </h3>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <label htmlFor="price">Price</label>
                      <Input
                        name="price"
                        style={{ fontFamily: "Tahoma", marginTop: "10px" }}
                        addonAfter="تومان"
                        placeholder="Enter Price"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <label htmlFor="pofferPricerice">Compare at price</label>
                      <Input
                        name="offerPrice"
                        style={{ fontFamily: "Tahoma", marginTop: "10px" }}
                        addonAfter="تومان"
                        placeholder="Enter Offer Price"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <label htmlFor="pofferPricerice">Point</label>
                      <Input
                        name="offerPrice"
                        style={{ fontFamily: "Tahoma", marginTop: "10px" }}
                        addonAfter="امتیاز"
                        placeholder="Enter Point"
                      />
                    </Grid>
                  </Grid>
                </Paper>
                <Paper
                  style={{ marginTop: "25px", padding: "50px" }}
                  elevation={3}
                >
                  <h3 style={{ fontWeight: "600", marginBottom: "20px" }}>
                    Inventory
                  </h3>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <label htmlFor="barcode">
                        Barcode (ISBN, UPC, GTIN, etc.)
                      </label>
                      <Input name="barcode" />
                    </Grid>
                    <Grid item xs={6}>
                      <label htmlFor="shipping">Shipping Cost</label>
                      <Input name="shipping" />
                    </Grid>
                  </Grid>
                  <Divider style={{ margin: "40px 0" }} />
                  <label htmlFor="quantity">Quantity</label>
                  <Input
                    style={{ fontFamily: "Tahoma", marginTop: "10px" }}
                    name="quantity"
                    addonAfter="عدد"
                  />
                </Paper>
                <Paper
                  style={{ marginTop: "25px", padding: "50px" }}
                  elevation={3}
                >
                  
                  <div><h3 style={{fontWeight:"bold",float:'left'}}>Varient</h3><Button type="primary" style={{float:"right"}} onClick={ClickHandlerOption}>Add Option</Button></div>

                  {count.map((co,index) => (<Varient vNumber={index} key={index}/>))}
                 
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper elevation={3}></Paper>
              </Grid>
            </Grid>
          </form>
        </Container>
      </main>
    </div>
  );
};

export default AddProduct;
