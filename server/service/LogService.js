const { WriteLog, ReadLog } = require("../model/Log");

const addLog = async (data) => {
  try {
    const result = await WriteLog.create(data);
    return result;
  } catch (err) {
    throw err;
  }
};

const getLog = async (id) => {
  try {
    const result = await ReadLog.findByPk(id);
    if (!result) {
      throw new Error('Log not found');
    }
    return result;
  } catch (err) {
    throw err;
  }
};

const updateLog = async (id,data) => {
  try {
    const log = await WriteLog.findByPk(id);
    if (!log) {
      throw new Error('Log not found');
    }
    const result = await log.update(data,{
      returning: true,
    });
    return result;
  } catch (err) {
    throw err;
  }
};

const deleteLog = async (id) => {
  try {
    const log = await WriteLog.findByPk(id);
    if (!log) {
      throw new Error('Log not found');
    }
    await log.destroy();
    return;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  addLog,
  getLog,
  updateLog,
  deleteLog
};
