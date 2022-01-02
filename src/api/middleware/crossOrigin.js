const cross = (req, res, next) => {
    res.header("Content-Type", "application/json;charset=UTF-8");
    res.header('Access-Control-Allow-Methods', '*');
    
    return next();
}

module.exports = cross