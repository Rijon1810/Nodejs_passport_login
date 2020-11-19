module.exports = {
    //we need to add this to any route for secure routing
    ensureAuthenicated : function (req,res, next) {
        if(req.isAuthenticated()){
            return next();
        }
        req.flash('error_msg','Please log in to view this resource');
        res.redirect('/users/login');
        
    }
}