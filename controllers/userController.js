import User from "../model/userModel.js";

// create
const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = User({ name, email });
    const user = await newUser.save();
    res.status(200).send(user, "user created");
  } catch (error) {
    res.status(500).send("error creating user");
    console.log(error, error.message);
  }
};

//read
const readUser = async (req, res) => {
  try {
    const userGet = await User.find()
    res.status(200).send(userGet)
  } catch (error) {
    res.status(500).send("error reading user");
    console.log(error, error.message);
  }
};


//update
const updateUser = (req, res)=>{
    const id = req.params.id
    const {name, email} = req.body
    const udatedUser = User.findByIdAndUpdate(id, {name, email}, {new: true} )
    res.status(200).send(udatedUser, "user updated")
}

// delete
const deleteUser = ()=>{
    const id = req.params.id
    const deletedUser = User.findByIdAndDelete(id)
    res.status(200).send(deletedUser, "user deleted")
}





export { createUser, readUser, updateUser, deleteUser };
