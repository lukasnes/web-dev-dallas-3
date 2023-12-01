const EditableRowModeButtons = ({ isEditing, onEditClick, onSaveClick, onDeleteClick }) => {
    return isEditing ? (
        <td>
            <button onClick={onSaveClick}>Save</button>
        </td>
    ) : (
        <td>
            <button onClick={onDeleteClick}>Delete</button>
            <button onClick={onEditClick}>Edit</button>
        </td>
    )
}

export default EditableRowModeButtons