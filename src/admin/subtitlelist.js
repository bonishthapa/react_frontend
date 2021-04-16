import React from 'react'
import Sidebar from './Sidebar'
import './Sidebar.css'

const subtitlelist = () => {
    return (
        <div>
            <Sidebar />
            <div class="main">
                <div class="container">
                    <h2>Subtitle List</h2>            
                    <table class="table">
                        <thead>
                            <tr>
                            <th>S.N</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Maintitle</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>	
                            <td></td>
                            <td><span></span></td>
                            <td></td>
                            <td>
                                <ul>
                                    <li>a</li>
                                    <li>a</li>
                                </ul>
                            </td>
                            <td>
                                <button class="btn btn-warning">Update</button>
                                <button class="btn btn-danger">Delete</button>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default subtitlelist
