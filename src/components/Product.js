import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Icon} from 'antd';

import {Button} from 'antd'
import { Container } from '@material-ui/core';

const Product = (props) => {
    const addClickhandler = e =>{
        props.history.push('/admin/addproduct');
    }
    return (
        <div>
          <main  style={{width:"80%",marginLeft:"auto",marginTop:"50px"}}>
             <Container>
             <Grid container spacing={3}>
                 <Grid item xs={6}>
                     <h2>Product</h2>
                 </Grid>
                 <Grid item xs={6} style={{textAlign:"right",paddingRight:"50px"}}>
                        <Button type="primary" onClick={addClickhandler}><Icon type="plus" /> Add Product</Button>
                 </Grid>
             </Grid>
             </Container>
            </main>
        </div>
    )
}

export default Product
