import { useState } from 'react';
import '../App.css';
import {VscEdit , VscTrash } from "react-icons/vsc";

function UpdateDelete({session, onDelete, onEdit}){
    return (
        <td id="update-delete">
            <VscEdit onClick={e => {e.preventDefault(); onEdit(session)}}/>
            <VscTrash onClick={e => {e.preventDefault(); onDelete(session.sessionId)}}/>
        </td>
    )
}

export default UpdateDelete;