import Company from "../models/Company.js";
import bcrypt from "bcrypt";

// Register a new company
 export const registerCompany = async(req,res) => {

    const {name,email,password} = req.body

    const imageFile = req.file;
    if(!name || !email || !password || !imageFile){
        return res.json({success:false,message:"Missing Details"})

    }
    try {
        const companyExists = await Company.findOne({ email });

        if (companyExist) {
            return res.json({ success: false, message: "Company already registered" });
          }
      
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password, salt);
        
    } catch (error) {
        
    }
}
// Company Login
export const loginCompany = async(req,res)=>{


}

// get company data
export const getCompanyData = async(req,res)=>{

}

// post a new job
export const postJob = async(req,res)=>{

}
// get company job applicants
export const getCompanyJobApplicants = async(req,res)=>{

}
// get company posted job
export const getCompanyPostedJobs = async(req,res)=>{

}
// change job applications status
export const changeJobApplicationsStatus = async(req,res)=>{

}
// change job visibility to manage the  visibility property in dashbboard
export const changeVisibility = async(req,res)=>{

}