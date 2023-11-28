const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcryqt = require('bcrypt-nodejs')

const userSchema = Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
});

userSchema.methods.encryptPassword = (password) => {
    return bcryqt.hashSync(password, bcryqt.genSaltSync(10), null)
}

userSchema.methods.validPassword = function (candidatePassword) {
    if (this.password != null) {
      return bcrypt.compareSync(candidatePassword, this.password);
    } else {
      return false;
    }
};
  

module.exports = mongoose.model('User', userSchema)
