'use client';
import React, { useState, useEffect } from 'react'; 
import styles from '../../page.module.css'
import { createClient } from '@supabase/supabase-js';


const TabComponent = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [c_data, setC_Data] = useState({
        tab1: [],
        tab2: [],
        tab3: [],
        tab4: [],
        tab5: [],
    });
    const [loading, setLoading] = useState(false);
    const [c_error, setC_Error] = useState(null);

    const tabs = [
        { id: 'tab1', label: 'Computer Science' },
        { id: 'tab2', label: 'Fashion & Textiles' },
        { id: 'tab3', label: 'Applied Mathematics' },
        { id: 'tab4', label: 'Hospitality Management' },
        { id: 'tab5', label: 'Food/Post Harvest Tech' },
    ];

    const departmentIds = {
        tab1: 1, // Replace with actual dep_id for Computer Science
        tab2: 2, // Replace with actual dep_id for Fashion & Textiles
        tab3: 3, // Replace with actual dep_id for Applied Mathematics
        tab4: 4, // Replace with actual dep_id for Hospitality Management
        tab5: 5, // Replace with actual dep_id for Food/Post Harvest Tech
    };

    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )



    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            const { data: tabData, error } = await supabase
                .from('projects')
                .select('*')
                .eq('dep_id', departmentIds[activeTab]);

            if (error) {
                console.error('Error fetching data:', error);
                setError(error.message);
            } else {
                console.log('Fetched data:', tabData);
                setData(prevData => ({ ...prevData, [activeTab]: tabData }));
            }
            setLoading(false);
        };

        fetchData();
    }, [activeTab]);

    const tableHeader = (
        <thead className="bg-blue-600 text-white">
            <tr>
                <th className="p-3 border">Programme</th>
                <th className="p-3 border">Project Title</th>
                <th className="p-3 border">Project Year</th>
                <th className="p-3 border">Supervisor</th>
                <th className="p-3 border">View</th>
            </tr>
        </thead>
    );

    const renderTableContent = (tabData) => (
        <table className='w-full border-collapse'>
            {tableHeader}
            <tbody>
                {tabData.map((item, index) => (
                    <tr key={index}>
                        <td className="p-3 border">{item.programme_type}</td>
                        <td className="p-3 border">{item.project_tittle}</td>
                        <td className="p-3 border">{item.project_year}</td>
                        <td className="p-3 border">{item.project_supervisor}</td>
                        <td className="p-3 border">{item.view_project}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <div className={styles.table_content}>
            <div className="text-center font-light mb-4">
                <h2>DEPARTMENT IN FACULTY OF APPLIED SCIENCE & TECH</h2>
            </div>
            <div className="flex justify-between mb-5">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        className={`border-2 border-gray-400 p-3 rounded-md hover:bg-blue-700 hover:scale-105 ${activeTab === tab.id ? 'bg-blue-600 text-white' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="p-5 border border-gray-300 rounded bg-gray-100">
                {loading ? (
                    <div>Loading...</div>
                ) : c_error ? (
                    <div>Error: {c_error}</div>
                ) : (
                    renderTableContent(c_data[activeTab])
                )}
            </div>
        </div>
    );
};

export default TabComponent;
