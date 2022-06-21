import express from "express";
const router = express.Router();
import {
    handleAddUser,
    // getUser,
    // updateUser,
    getUserByCookie,
    // handleDeleteUser,
    getUsers,
    login,
    // handleSearchItems
} from "../cont/usersCont";

//
router
  .get("/get-users", getUsers)
  // .patch("/update-user",updateUser )
  // .delete("/user-delete", handleDeleteUser )
  .post("/add-user", handleAddUser)
//   .post('/get-user',getUser)
    .post('/login', login)
  .get('get-user',getUserByCookie)
  // .get('get-user', handleSearchItems)

export default router;
