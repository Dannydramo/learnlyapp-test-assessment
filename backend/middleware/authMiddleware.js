const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const User = require('../models/user');

exports.userProtect = catchAsync(async (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    }
  
    if (!token) {
        return next(
            new AppError(
                'You are not logged in. Please log in to get access',
                401
            )
        );
    }
    const verifyAsync = promisify(jwt.verify);
    const decoded = await verifyAsync(token, process.env.JWT_SECRET);


    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
        return next(new AppError('The user does not longer exist', 401));
    }

    req.user = currentUser;
    next();
});
