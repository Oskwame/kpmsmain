
'use client';
import React, { useState } from 'react';
import styles from '../page.module.css'

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const tabs = [
        { id: 'tab1', label: 'Accounting' },
        { id: 'tab2', label: 'Sec & Management' },
        { id: 'tab3', label: 'Procurement & Supply' },
        { id: 'tab4', label: 'Professional Studies ' },
        { id: 'tab5', label: 'Marketing' },
        { id: 'tab6', label: 'General Studies ' },
    ];

    const tabContents = {
        tab1: (
            <table className="w-full border-collapse mb-5">
                <thead className=" bg-blue-600 text-white">
                    <tr>
                        <th className="p-3 border">Programme</th>
                        <th className="p-3 border">Project Title</th>
                        <th className="p-3 border">Academic Year</th>
                        <th className="p-3 border">Supervisor</th>
                    </tr>
                </thead>
                <tbody id="tab1-body"></tbody>
            </table>
        ),
        tab2: (
            <table className="w-full border-collapse mb-5">
                <thead className="bg-blue-700 text-white">
                    <tr>
                        <th className="p-3 border">Programme</th>
                        <th className="p-3 border">Project Title</th>
                        <th className="p-3 border">Academic Year</th>
                        <th className="p-3 border">Supervisor</th>
                    </tr>
                </thead>
                <tbody id="tab2-body"></tbody>
            </table>
        ),
        tab3: (
            <table className="w-full border-collapse mb-5">
                <thead className="bg-blue-700 text-white">
                    <tr>
                        <th className="p-3 border">Programme</th>
                        <th className="p-3 border">Project Title</th>
                        <th className="p-3 border">Academic Year</th>
                        <th className="p-3 border">Supervisor</th>
                    </tr>
                </thead>
                <tbody id="tab3-body"></tbody>
            </table>
        ),
        tab4: (
            <table className="w-full border-collapse mb-5">
                <thead className="bg-blue-700 text-white">
                    <tr>
                        <th className="p-3 border">Programme</th>
                        <th className="p-3 border">Project Title</th>
                        <th className="p-3 border">Academic Year</th>
                        <th className="p-3 border">Supervisor</th>
                    </tr>
                </thead>
                <tbody id="tab4-body"></tbody>
            </table>
        ),
        tab5: (
            <table className="w-full border-collapse mb-5">
                <thead className="bg-blue-700 text-white">
                    <tr>
                        <th className="p-3 border">Programme</th>
                        <th className="p-3 border">Project Title</th>
                        <th className="p-3 border">Academic Year</th>
                        <th className="p-3 border">Supervisor</th>
                    </tr>
                </thead>
                <tbody id="tab5-body"></tbody>
            </table>
        ),
      tab6: (
            <table className="w-full border-collapse mb-5">
                <thead className=" bg-blue-600 text-white">
                    <tr>
                        <th className="p-3 border">Programme</th>
                        <th className="p-3 border">Project Title</th>
                        <th className="p-3 border">Academic Year</th>
                        <th className="p-3 border">Supervisor</th>
                    </tr>
                </thead>
                <tbody id="tab1-body"></tbody>
            </table>
        ),  
    };

    return (
        <div className={styles.table_content}>
            <div className="text-center font-light mb-4">
                <h2>DEPARTMENTS IN FACULTY OF BUSINESS AND MANAGEMENT STUDIES</h2>
            </div>
            <div className="flex justify-between mb-5">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        className={` border-2 border-gray-300 p-2.5 rounded-md hover:bg-blue-700 hover:scale-105 ${activeTab === tab.id ? ' bg-blue-600 text-white' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="p-5 border border-gray-300 rounded bg-gray-100">
                {tabContents[activeTab]}
            </div>
        </div>
    );
};

export default TabComponent;
