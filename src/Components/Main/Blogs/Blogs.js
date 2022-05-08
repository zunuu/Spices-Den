import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='bg-secondary m-0 p-0 p-5 d-flex row bg-opacity-50'>
            <div className='bg-danger blogs w-75 mx-auto justify-content-center bg-opacity-75 shadow'>
                <h3>Difference between `javascript` and `nodejs`</h3>
                <hr />
                <p>
                    Javascript is Programming Language where NodeJs is not.Nodejs is a runtime language.It runs the javascript code, interpret it line by line to make machine readable code .Where Javascript written in human readable code.Javascript can run in browser but outside from the browser we need nodejs to javascript code.Javascript is mainly used in frontend where nodejs mostly used in the server.React is the on of the framework of JS where Express is framework of nodejs
                </p>
            </div>
            <div className='bg-primary blogs w-75 mx-auto justify-content-center bg-opacity-75 shadow'>
                <h3>When should you use `nodejs` and when should you use `mongodb`</h3>
                <hr />
                <p>
                    MongoDB provides API library which run through a Nodejs application. It's like a building where Mongodb is like raw materials which gives the structure(MongoDB) and nodejs is like the blueprints ,process and environment of the functionality.MonogDB is the database which gives chance to efficiently store documents in a database and to perform operations and Nodejs execute the operations. That means when we want to store data, we should use mongodb and we have to run the operation in mongodb to connect to the server , then we have to use nodejs
                </p>
            </div>
            <div className='bg-success blogs w-75 mx-auto justify-content-center bg-opacity-75 shadow'>
                <h3>Differences between `sql` and `nosql` databases</h3>
                <hr />
                <p>
                    SQL databases are relational whereas NoSQL is Non-relational & distributed .SQLs are vertically scalable where NoSQLs are horizontally scalable.NoSQL databases are larger and powerful than SQL databases.
                    SQL databases manipulates structured query language (SQL). This language is extremely powerful. SQL is one of the most widely-used options for complex queries. SQL requires to use predefined schemas before you work with it.
                    A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways .That means it can be column-oriented, document-oriented. Each document can have its own unique structure.
                </p>
            </div>
        </div>
    );
};

export default Blogs;