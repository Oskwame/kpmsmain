'use client';
import { FaFile } from 'react-icons/fa';
import Link from 'next/link';
import React, { useState } from 'react';

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const tabs = [
        { id: 'tab1', label: 'Computer Science' },
        { id: 'tab2', label: 'Hospitality & Tourism' },
        { id: 'tab3', label: 'Post-Harvest/Food Tech' },
        { id: 'tab4', label: 'Applied Mathematics' },
        { id: 'tab5', label: 'Fashion Design' },
    ];

    const tabContents = {
        tab1: (
            <table className="w-full border-collapse mb-5">
                <thead className="bg-blue-600 text-white">
                    <tr>
                        <th className="p-3 border">Programme</th>
                        <th className="p-3 border">Project Title</th>
                        <th className="p-3 border">Academic Year</th>
                        <th className="p-3 border">Supervisor</th>
                        <th className="p-3 border">View Docs</th>
                    </tr>
                </thead>
                <tbody id="tab1-body">
                    <tr>
                        <td className="p-3 border">H.N.D Computer Science</td>
                        <td className="p-3 border">Beauty Salon Booking  system</td>
                        <td className="p-3 border">2023/2024</td>
                        <td className="p-3 border">Mr.Anab Solomon</td>
                        <td className=' p-3 border' >
                        <Link href="file:///C:/Users/kayte/OneDrive/Desktop/learning%20materials/MIS/186-Management-Information-Systems-James-A.
                        -O%E2%80%99Brien-George-M.-Marakas-Edisi-10-2010.pdf">
                          <FaFile size={24} />
                
            </Link>
          
                    </td>
                    </tr>
                    <tr>
                        <td className="p-3 border">H.N.D Computer Science</td>
                        <td className="p-3 border">Academic Management System</td>
                        <td className="p-3 border">2023/2024</td>
                        <td className="p-3 border">mr.Samuel Tawiah</td>
                    </tr>
                </tbody>
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
                <tbody id="tab2-body">
                    <tr>
                        <td className="p-3 border">B.Sc. Hospitality</td>
                        <td className="p-3 border">Sustainable Tourism Practices</td>
                        <td className="p-3 border">2022/2023</td>
                        <td className="p-3 border">Dr. Alex Green</td>
                    </tr>
                    <tr>
                        <td className="p-3 border">B.Sc. Hospitality</td>
                        <td className="p-3 border">Customer Experience in Hotels</td>
                        <td className="p-3 border">2021/2022</td>
                        <td className="p-3 border">Dr. Emily White</td>
                    </tr>
                </tbody>
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
                <tbody id="tab3-body">
                    <tr>
                        <td className="p-3 border">B.Sc. Food Tech</td>
                        <td className="p-3 border">Post-Harvest Loss Reduction</td>
                        <td className="p-3 border">2022/2023</td>
                        <td className="p-3 border">Dr. Sarah Brown</td>
                    </tr>
                    <tr>
                        <td className="p-3 border">B.Sc. Food Tech</td>
                        <td className="p-3 border">Food Packaging Innovation</td>
                        <td className="p-3 border">2021/2022</td>
                        <td className="p-3 border">Dr. David Miller</td>
                    </tr>
                </tbody>
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
                <tbody id="tab4-body">
                    <tr>
                        <td className="p-3 border">B.Sc. Mathematics</td>
                        <td className="p-3 border">Statistical Analysis in Finance</td>
                        <td className="p-3 border">2022/2023</td>
                        <td className="p-3 border">Dr. Mark Grey</td>
                    </tr>
                    <tr>
                        <td className="p-3 border">B.Sc. Mathematics</td>
                        <td className="p-3 border">Applied Algebra in Coding Theory</td>
                        <td className="p-3 border">2021/2022</td>
                        <td className="p-3 border">Dr. Linda Blue</td>
                    </tr>
                </tbody>
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
                <tbody id="tab5-body">
                    <tr>
                        <td className="p-3 border">B.Sc. Fashion Design</td>
                        <td className="p-3 border">Sustainable Fashion</td>
                        <td className="p-3 border">2022/2023</td>
                        <td className="p-3 border">Dr. Clara Wilson</td>
                    </tr>
                    <tr>
                        <td className="p-3 border">B.Sc. Fashion Design</td>
                        <td className="p-3 border">Digital Fashion Trends</td>
                        <td className="p-3 border">2021/2022</td>
                        <td className="p-3 border">Dr. Patrick Lane</td>
                    </tr>
                </tbody>
            </table>
        ),
        tab6: (
            <table className="w-full border-collapse mb-5">
                <thead className="bg-blue-700 text-white">
                    <tr>
                        <th className="p-3 border">Programme</th>
                        <th className="p-3 border">Project Title</th>
                        <th className="p-3 border">Academic Year</th>
                        <th className="p-3 border">Supervisor</th>
                    </tr>
                </thead>
            </table>
        ),
    };

    return (
        <div>
            <div className="text-center font-light mb-4">
                <h2>DEPARTMENTS IN FACULTY OF APPLIED SCIENCE & TECHNOLOGY</h2>
            </div>
            <div className="flex justify-between mb-5">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        className={`border-2 border-gray-300 p-2.5 rounded-md hover:bg-blue-700 hover:scale-105 ${activeTab === tab.id ? 'bg-blue-600 text-white' : ''}`}
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
