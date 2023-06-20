import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
const Blog = () => {
    return (
        <div className='w-11/12 mx-auto text-center p-6'>
            <Tabs>
                <TabList>
                    <Tab>Question 1</Tab>
                    <Tab>Question 2</Tab>
                    <Tab>Question 3</Tab>
                    <Tab>Question 4</Tab>
                </TabList>
                <div className='md:flex justify-between gap-5 p-3 bg-slate-200'>
                    <TabPanel className='text-left'>
                        <h1 className='text-2xl p-4'><span>Question : </span> What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                        <div className='bg-gray-300 p-4 rounded-md'>
                            <div className='border p-4 rounded-md'>
                                <h1 className='text-2xl text-black'>Access Token:</h1>
                                <or>
                                    <li>Purpose: An access token is a credential that grants a client permission to access protected resources on a server.</li>
                                    <li>Functionality: When a user or client authenticates successfully, the server issues an access token. The client includes this token in subsequent requests to access protected resources.</li>
                                    <li>Storage: Access tokens are typically stored on the client-side, often in memory or a client-side storage mechanism</li>
                                </or>
                            </div>

                            <div className='border p-4 rounded-md mt-2'>
                                <h1 className='text-2xl text-black'>Refresh Token:</h1>
                                <or>
                                    <li>Purpose: A refresh token is a long-lived credential used to obtain a new access token when the current one expires.</li>
                                    <li>Functionality: When the access token expires, the client sends the refresh token to a dedicated server endpoint. If the refresh token is valid, the server issues a new access token without requiring the user to reauthenticate.</li>
                                    <li>Storage: Refresh tokens should be stored securely on the client-side, ideally in an HTTP-only secure cookie or a storage mechanism with strict security controls to mitigate the risk of token theft.</li>
                                </or>
                            </div>

                        </div>
                    </TabPanel>
                    <TabPanel className='text-left'>
                        <h1 className='text-2xl p-4'><span>Question : </span> Compare SQL and NoSQL databases?</h1>
                        <div className='bg-gray-300 p-4 rounded-md'>
                            <div className='border p-4 rounded-md'>
                                <h1 className='text-2xl text-black'>SQL Databases</h1>
                                <or>
                                    <li>Structure: SQL databases are based on a structured, tabular model. Data is organized into tables with predefined schemas,</li>
                                    <li>Query Language: SQL databases use Structured Query Language (SQL) to interact with the data. SQL provides a standardized way to define and manipulate relational data.</li>
                                    <li>ACID Compliance: SQL databases typically offer ACID (Atomicity, Consistency, Isolation, Durability) compliance, which ensures data integrity, transactional support, and strong consistency.</li>
                                </or>
                            </div>
                            <div className='border p-4 rounded-md'>
                                <h1 className='text-2xl text-black'>NoSQL databases</h1>
                                <or>
                                    <li>Structure: NoSQL databases have a flexible structure. They are document-based, key-value, columnar, or graph-based, allowing for dynamic and unstructured data models.</li>
                                    <li>Query Language: NoSQL databases have varied query languages specific to their data models. Some use JSON-like query languages, while others provide APIs for data access and manipulation.</li>
                                    <li>ACID Compliance: NoSQL databases often sacrifice full ACID compliance in favor of improved scalability and performance. They may prioritize eventual consistency or provide limited transactional capabilities.</li>
                                </or>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel className='text-left'>
                        <h1 className='text-2xl px-4 py-2'>What is express js? What is Nest JS </h1>
                        <div className='border p-4 rounded-md mt-2'>
                            <h1>Express.js is a popular web application framework for Node.js. It provides a minimalist and flexible approach to building web servers and APIs. Express.js simplifies common web development tasks such as routing, middleware management, and handling HTTP requests and responses. It has a lightweight core and allows developers to add various middleware and extensions as needed. Express.js has a large ecosystem of modules and is known for its simplicity and ease of use, making it a popular choice for building web applications and APIs in Node.js.</h1>
                        </div>
                    </TabPanel>
                    <TabPanel className='text-left'>
                        <h1 className='text-2xl px-4 py-2'>What is MongoDB aggregate and how does it work </h1>
                        <div className='border p-4 rounded-md mt-2'>
                            <h1>Express.js is a popular web application framework for Node.js. It provides a minimalist and flexible approach to building web servers and APIs. Express.js simplifies common web development tasks such as routing, middleware management, and handling HTTP requests and responses. It has a lightweight core and allows developers to add various middleware and extensions as needed. Express.js has a large ecosystem of modules and is known for its simplicity and ease of use, making it a popular choice for building web applications and APIs in Node.js.</h1>
                        </div>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
};
export default Blog;