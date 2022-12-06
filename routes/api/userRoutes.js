const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriendToExistingUser,
    deleteFriendFromExistingUser,

} = require('../../controllers/userController.js');

// /api/users 
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

// /api/users/:userId/friends/:friendId

router
    .route('/:userId/friends/:friendId')
    .post(addFriendToExistingUser)
    .delete(deleteFriendFromExistingUser)

module.exports = router;