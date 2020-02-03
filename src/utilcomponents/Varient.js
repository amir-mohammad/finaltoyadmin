import React,{useState} from 'react';
import {Grid} from '@material-ui/core';
import {Input,Button} from 'antd';

const Varient = ({vNumber}) => {
    const [show,setShow] = useState(true);

    const removeClick = () =>{
        setShow(!show);
    }
    return (
        <div>
            <Grid container spacing={3}>
                {show ? ( <><Grid item xs={12}>
                   <h3 style={{fontWeight:"600"}}>Option {vNumber}</h3>
                </Grid>
                <Grid item xs={3}>
                    <Input placeholder="Option Name"/>
                </Grid>
                <Grid item xs={9}>
                    <Input placeholder="Option Value"/>
                </Grid>
                <Grid item xs={12}>
                  <Button type="primary" style={{float:'right'}} onClick={removeClick}>Remove Option</Button>
                </Grid></>) : null}
           
            </Grid>
        </div>
    )
}

export default Varient
