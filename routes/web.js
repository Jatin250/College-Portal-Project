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
route.post("/userinsert", FrontController.userinsert);
route.post("/verifyLogin", FrontController.verifyLogin);
route.get("/logout", FrontController.logout);

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
route.post(
  "/admin/update_Course/:id",
  checkAuth,
  AdminController.update_course
);
route.get("/admin/contactDisplay", checkAuth, AdminController.contactDisplay);

module.exports = route;
