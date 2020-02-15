import React from "react"
import Layout from "../components/layout"
import projectstyles from "../styles/projects.scss"
 const ProjectsPage = () => {
    return (
        <div>
            
            <Layout>
               <body className={projectstyles.body}>

                <h1>Projects</h1>

            <div className="pro1">
                <h3>Project 1</h3>
                <p>Coming Soon.</p>
                </div>
            
            <div className="pro2">
            <h3>Project 2</h3>
            <p>Coming Soon.</p>
            </div>
            
           <div className="pro3">
           <h3>Project 3</h3>
            <p>Coming Soon.</p>
           </div>
           </body>
           
            </Layout>
        
        </div>
    )
}

export default ProjectsPage