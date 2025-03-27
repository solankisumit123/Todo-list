var express = require('express');
var router = express.Router();
var data = require('../controller/admincontroller')
var task = require('../controller/taskcontroller')
var user = require('../controller/usercontroller');

// admin Login
router.post('/create_admin', data.create_admin)
router.post('/login_admin', data.login_admin)
router.get('/admin_view', data.get_admin)
router.get('/admin_logout', data.admin_logout)

//  user login
router.post('/add_user', user.add_user)
router.post('/login_user', user.login_user)
router.get('/find_user', user.find_user)
router.get('/update_user/:id', user.update_user)
router.get('/delete_user/:id', user.delete_user)

//  task add 
router.post('/add_task', task.add_task)
router.get('/view_task', task.get_task)
router.get('/delete_task/:id',task.delete_task)
router.post('/update_task/:id',task.update_task)
router.get('/find_task/:id', task.get_task)

// user task status update
router.post('/task_status', user.update_status)

    
module.exports = router;
