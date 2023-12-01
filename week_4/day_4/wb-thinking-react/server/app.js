import express from 'express'
import morgan from 'morgan'
import ViteExpress from 'vite-express'
import {
    getInvoices,
    addInvoice,
    updateInvoice,
    deleteInvoice
} from './controllers/controller.js'

const app = express()
const port = '8000'

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended:false }))

ViteExpress.config({ printViteDevServerHost: true })

// Routes go here
app.get('/api/invoice', getInvoices)
app.post('/api/invoice', addInvoice)
app.put('/api/invoice/:id', updateInvoice)
app.delete('/api/invoice/:id', deleteInvoice)

ViteExpress.listen(app,port,() => console.log(`Server is listening on http://localhost:${port}`))