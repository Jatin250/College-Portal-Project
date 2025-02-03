const express = require("express");
const FrontController = require("../controllers/FrontController");
const route = express.Router();
const checkAuth = require("../middleware/auth");
const ContactController = require("../controllers/ContactController");
const CourseController = require("../controllers/CourseController");
const AdminController = require("../controllers/admin/AdminController");

// route
route.get("/", FrontController.login);
route.get("/home", checkAuth, FrontController.home);
route.get("/about", checkAuth, FrontController.about);
route.get("/contact", checkAuth, FrontController.contact);
route.get("/register", FrontController.register);
route.get("/logout", FrontController.logout);

// userinsert
route.post("/userinsert", FrontController.userinsert);
// verifyLogin
route.post("/verifyLogin", FrontController.verifyLogin);

// profile
route.get("/profile", checkAuth, FrontController.profile);
route.post("/changePassword", checkAuth, FrontController.changePassword);
route.post("/updateProfile", checkAuth, FrontController.updateProfile);

// contactByUser
route.post("/contactByUser", checkAuth, ContactController.contactByUser);

// course
route.post("/course_insert", checkAuth, CourseController.createCourse);
route.get("/courseDisplay", checkAuth, CourseController.courseDisplay);
route.get("/ViewCourse/:id", checkAuth, CourseController.ViewCourse);
route.get("/EditCourse/:id", checkAuth, CourseController.EditCourse);
route.post("/courseUpdate/:id", checkAuth, CourseController.courseUpdate);

// verify Mail
route.get("/register/verify", FrontController.verifyMail);

// Forget password
route.post("/forgot_Password", FrontController.forgetPasswordVerify);
route.get("/reset-password", FrontController.reset_Password);
route.post("/reset_Password1", FrontController.reset_Password1);

// adminController
route.get("/admin/dashboard", checkAuth, AdminController.dashboard);
route.get("/admin/courseDisplay", checkAuth, AdminController.courseDisplay);
route.post(
  "/admin/update_status/:id",
  checkAuth,
  AdminController.update_status
);
route.get("/admin/courseView/:id", checkAuth, AdminController.courseView);
route.get("/admin/courseEdit/:id", checkAuth, AdminController.courseEdit);
route.get("/admin/courseDelete/:id", checkAuth, AdminController.courseDelete);
route.get(
  "/admin/deleteMessage/:id",
  checkAuth,
  AdminController.delete_message
);
route.post(
  "/admin/update_Course/:id",
  checkAuth,
  AdminController.update_course
);
route.get("/admin/ContactDisplay", checkAuth, AdminController.contactDisplay);
route.get("/admin/update_pass", checkAuth, AdminController.update_pass);
route.get("/admin/profile_update", checkAuth, AdminController.profile_update);
route.post("/admin/changePassword", checkAuth, AdminController.changePassword);
route.post("/admin/updateProfile", checkAuth, AdminController.updateProfile);

module.exports = route;
