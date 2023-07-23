const { WriteUser, ReadUser } = require("../model/User");

const addUser = async (data) => {
  try {
    const result = await WriteUser.create(data);
    return result;
  } catch (err) {
    throw err;
  }
};

const getUser = async (id) => {
  try {
    const result = await ReadUser.findByPk(id);
    if (!result) {
      throw new Error('User not found');
    }
    return result;
  } catch (err) {
    throw err;
  }
};

const updateUser = async (id,data) => {
  try {
    const user = await WriteUser.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    const result = await user.update(data,{
      returning: true,
    });
    return result;
  } catch (err) {
    throw err;
  }
};

const deleteUser = async (id) => {
  try {
    const user = await WriteUser.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    await user.destroy();
    return;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  addUser,
  getUser,
  updateUser,
  deleteUser
};
