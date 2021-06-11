export const checkToken = checkToken;

function checkToken(req, res, next) {
  let token = req.headers["authorization"];
  token
    ? next()
    : res.json({
        success: false,
        message: "no token supplied",
      });
}
