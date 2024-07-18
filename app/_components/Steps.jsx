import React from 'react'
import styles from './components.module.css'
import { RiLoginBoxLine ,RiFileDownloadLine } from "react-icons/ri";
import { FaBarsProgress , FaTableList } from "react-icons/fa6";
import { LiaSchoolSolid } from "react-icons/lia";
import { IoSchoolOutline } from "react-icons/io5";


const Steps = () => {
  return (
    <section className={styles.usesteps}>

    <div className={styles.flexcontainer}>
    
    <div className={styles.container_text}>
        <h2>Step to Step Approach On How To Use KPMS</h2>
          <h1>KPMS enables students to get access to our large database of collected student 
          projects available for download</h1>
      </div>
    
      <div className={styles.container_tiles}>
        <div className={styles.container} id='container1'>
          <span>No.1</span> 
          <RiLoginBoxLine className={styles.icon} />
          <h5>Create ACCOUNT and LOGIN</h5>
        </div>

        <div className={styles.container} id='container2'>
          <span>No.2</span>
          <FaBarsProgress className={styles.icon} />
          <h5>navigate to click PROJECTS </h5>
        </div>

        <div className={styles.container} id='container3'>
          <span>No.3</span>
          <LiaSchoolSolid className={styles.icon} />
          <h5>select preferred FACULTY</h5>
        </div>

        <div className={styles.container} id='container4'>
          <span>No.4</span>
          <IoSchoolOutline className={styles.icon}/>
          <h5>choose the DEPARTMENT</h5>
        </div>

        <div className={styles.container} id='container5'>
          <span>No.5</span>
          <FaTableList className={styles.icon} /> 
          <h5> view projects from TABLE</h5>
        </div>

        <div className={styles.container} id='container6'>
          <span>No.6</span>
          <RiFileDownloadLine className={styles.icon} />
          <h5>download preferred PROJECT FILE</h5>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Steps
