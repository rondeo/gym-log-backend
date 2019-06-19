const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  //We use the try catch block to see if we actually have a token, if not we will proceed accordingly
  try {
    //console.log(req.headers.authorization.split(" ")[1]);
    //Getting the Token from the headers - we are assuming here that the token will look like "Bearer asdfghjasdfghj";
    const token = req.headers.authorization.split(" ")[1];
    //jwt.verify will throw an error if the token fails - the second argument is the secret string we used for creating the oken which is in the user.js route
    const decodedToken = jwt.verify(token, 'secret_this_should_be_longer');
    req.userData = { email: decodedToken.email, userId: decodedToken.userId };
    //If token does not fail we want to continue to the next code - we place this middle after the path but before everything else on our routes --> checkAuth,
    next();
  } catch (error) {
    res.status(401).json({ message: "Fauth failed!"});
  }
};
