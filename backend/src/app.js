import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes.js'
import cookie_parser from 'cookie-parser'
import projectRoutes from './routes/project.routes.js'

const app = express();

//settings

app.use(morgan('dev'));
app.use(express.json());
app.set('port', 4000);
app.use(cookie_parser());


//middleware

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));


//routes

app.use("/api",authRoutes);
app.use("/api",projectRoutes);

export default app;