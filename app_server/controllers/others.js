
const information = function(req, res){
  res.render('information', { title: 'Information' });
};

const register = function(req, res){
  res.render('register', { title: 'Register' });
};

const login = function(req, res){
  res.render('login', { title: 'Login' });
};

const about = function(req, res){
  res.render('generic-text', { title: 'About' });
};



module.exports = {
  information,
  register,
  login,
  about
};
