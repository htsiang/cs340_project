import React from 'react';
import '../App.css';
import { VscEdit, VscTrash } from "react-icons/vsc";
import SessionsTableRow from './SessionsTableRow';

function SessionsTable({ sessions, onDelete, onEdit }){

    return (
        <table className='table'>
            <caption></caption>
            <thead>
                <tr>
                    <th className='columns'>ID</th>
                    <th className='columns'>pokemon nickname</th>
                    <th className='columns'>trainer first name</th>
                    <th className='columns'>trainer last name</th>
                    <th className='columns'>pokemon type</th>
                    <th className='columns'>pokemon species</th>
                    <th className='columns'>date</th>
                    <th className='columns'>time</th>
                    <th className='columns'>cost</th>
                    <th className='columns'>
                        <div><VscEdit />{' '}<VscTrash /></div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {sessions.map((session, i) => <SessionsTableRow session={session} onDelete={onDelete} onEdit={onEdit} key={i} />)}
            </tbody>
        </table>
    )
}

export default SessionsTable;
