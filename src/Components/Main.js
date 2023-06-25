import React, { useState } from "react";
import Card from "./Card";
import axios from "../axios";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.transparent',
  p: 4,
};

const Main=()=>{

    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([""]);
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpen1 = () => setOpen1(true);
  const handleClose = () => setOpen(false);
  const handleClose1 = () => setOpen1(false);
    const searchBook=(evt)=>{
        if(evt.key==="Enter"){
            console.log("search")
        }
    }

    return(
        <>

<div>
      <Button variant="contained" style={{fontSize:18, position:"absolute" ,right:80 ,top:80, zIndex:1000}} onClick={handleOpen1}>Add Book </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
        <div className="header">
            <div className="row1">
                <h1>A room without books is like <br/>a body without a soul</h1>

            </div>
            <div className="row2">
                <h2>Find Your Book</h2>
                
                <div className="search">
                    <input type="text" placeholder="Enter Your Book Name" value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook}/>
                    <button><i class="bi bi-search"></i></button>
                </div>
                <img src="./images/Optimized-book_editing.jpeg" alt=""className="mainImg"/>
            </div>

        </div>
        <div className="container">
            
                <button style={{marginTop:"200px"}} onClick={handleOpen}><Card book={bookData} /></button>
                <button style={{marginTop:"200px"}} onClick={handleOpen}><Card book={bookData} /></button>
                <button style={{marginTop:"200px"}} onClick={handleOpen}><Card book={bookData} /></button>
                <button style={{marginTop:"200px"}} onClick={handleOpen}><Card book={bookData} /></button>
                <button style={{marginTop:"200px"}} onClick={handleOpen}><Card book={bookData} /></button>
                <button style={{marginTop:"200px"}} onClick={handleOpen}><Card book={bookData} /></button>
                <button style={{marginTop:"200px"}} onClick={handleOpen}><Card book={bookData} /></button>
                <button style={{marginTop:"200px"}} onClick={handleOpen}><Card book={bookData} /></button>
                
               
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="Add Book Details"
        aria-describedby="Manage Books"
      >
        <Box sx={style}>
        onClick={handleOpen}
        <Paper elevation={3} sx={{ marginRight: "15%", marginLeft: "15%" }}>
        <Box sx={{ padding: 5 }}>
          <Typography variant="h2" gutterBottom sx={{ paddingBottom: 5 }}>
            
          Add Book Details
          <hr/>
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                Manage Books
              </InputLabel>
            </Grid>
            <Grid item xs={10} sm={10} >
              <TextField
                required
                id="title"
                name="title"
                label="Id"
                style={{width:"50%",marginRight:"10px"}}
                size="small"
                autoComplete="off"
                variant="outlined"
              />
               <Button variant="contained" sx={{ background:"green" }}>
                Search
              </Button>
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                Description
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                fullWidth
                rows={4}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                Name
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                required
                id="url"
                name="url"
                label="Name"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                Price
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                required
                id="url"
                name="url"
                label="Price"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                Author
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="author"
                name="author"
                label="Author"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />
            </Grid>
           
            <Grid item xs={12} sm={6} />
            <Grid item xs={12} sm={5} />
            <Grid item xs={12} sm={4}>
              <Button variant="contained" size="large" style={{marginRight:10}}>
                Save
              </Button>
              <Button variant="contained" size="large" style={{background:"yellow", marginRight:10, color:"black"}}>
                Update
              </Button>
              <Button variant="contained" size="large" style={{background:"red"}}>
                Delete
              </Button>
            </Grid>
            <Grid item xs={12} sm={5} />
          </Grid>
        </Box>
      </Paper>
        </Box>
      </Modal>
            
          
        </div>
        </>
    )
}
export default Main;