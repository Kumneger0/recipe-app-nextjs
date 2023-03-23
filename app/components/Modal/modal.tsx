import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { debounce } from "debouncing";
import styles from "./modal.module.css";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [searchData, setSearchData] = React.useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //@ts-ignore
  const handleChange: any = debounce(async (e: any) => {
    if (!e.target.value || e.target.value == "") {
      setSearchData([]);
      return;
    }
    const res = await fetch(`/api/search/${e.target.value}`);
    if (!res.ok) return;
    const data = await res.json();
    setSearchData(data.results);
  }, 700);

  return (
    <div>
      <Button onClick={handleOpen}>
        <SearchIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={styles.modal}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <TextField
              style={{ width: "100%" }}
              id="outlined-basic"
              label="Search Recipe"
              variant="outlined"
              onChange={handleChange}
            />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className={styles.searchName}>
              {searchData?.length ? (
                searchData?.map((name: any, i: number) => {
                  return <div key={i}>{name.display}</div>;
                })
              ) : (
                <div>Search recipe you want</div>
              )}
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
