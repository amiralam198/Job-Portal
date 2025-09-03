import './config/instrument.js'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from './controllers/webhooks.js'
import companyRoutes from './routes/companyRoutes.js'


// Initialize Express
const app = express()

// connect to database
await connectDB()

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.get('/',(req,res)=> res.send("API Working"))
app.get("/debug-sentry", function mainHandler(req,res){
    throw new Error("My first Sentary error!")
});

app.post('/webhooks',clerkWebhooks)
app.use('/api/company',companyRoutes)

// Port
const PORT = process.env.PORT || 5001
Sentry.setupExpressErrorHandler(app);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

