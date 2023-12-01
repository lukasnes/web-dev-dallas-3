import idGenerator from "../utils/idGenerator.js";
let TEST_DATA = [
    { id: 0, description: 'Content plan', rate: 50, hours: 4 },
    { id: 1, description: 'Copy writing', rate: 50, hours: 2 },
    { id: 2, description: 'Website design', rate: 50, hours: 5 },
    { id: 3, description: 'Website development', rate: 100, hours: 5 },
  ];

const id = idGenerator(4)

const getInvoices = (req,res) => {
    res.status(200).json(TEST_DATA)
}

const addInvoice = (req,res) => {
    const { description,rate,hours } = req.body

    const newItem = {
        id: id.next().value,
        description: description || 'Description',
        rate: +rate || 0,
        hours: +hours || 0,
    }

    TEST_DATA.push(newItem)
    res.json(newItem)
}

const updateInvoice = (req,res) => {
    const { id } = req.params
    const { description,rate,hours } = req.body

    const item = TEST_DATA.find((invoice) => invoice.id === +id)

    item.description = description || item.description
    item.rate = +rate || item.rate
    item.hours = +hours || item.hours

    res.json(item)
}

const deleteInvoice = (req,res) => {
    const { id } = req.params

    TEST_DATA = TEST_DATA.filter((invoice) => invoice.id !== +id)
    res.json(TEST_DATA)
}

export { getInvoices,addInvoice,updateInvoice,deleteInvoice }