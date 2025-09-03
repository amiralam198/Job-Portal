import express from 'express'
import {
    changeJobApplicationsStatus,
    changeVisibility,
    getCompanyData,
    getCompanyJobApplicants,
    getCompanyPostedJobs,
    loginCompany,
    postJob,
    registerCompany
  } from '../controllers/companyController.js';
  

const router = express.Router()

// Register a comapny 
router.post('/register',registerCompany)

// company login
router.post('/login',loginCompany)

// get company data 
router.post('/company',getCompanyData)

// post a job
router.post('/post-job',postJob)

// get applicants data of company
router.get('/applicants',getCompanyJobApplicants)

// get company job list
router.get('/list-jobs',getCompanyPostedJobs)

// change application status
router.post('/change-status',changeJobApplicationsStatus)

// Change application visibility
router.post('/change-visibility',changeVisibility)

export default router