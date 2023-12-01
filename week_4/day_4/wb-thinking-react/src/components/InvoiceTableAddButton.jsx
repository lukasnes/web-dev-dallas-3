const InvoiceTableAddButton = ({ addRow }) => {
    return (
        <tr>
            <td></td>
            <td colSpan="4">
                <button onClick={addRow}>Add</button>
            </td>
        </tr>
    )
}

export default InvoiceTableAddButton