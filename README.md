# APIs Documentation

If you want to get clear Idea of this API docuemntation please refer to this link for the <a href="https://github.com/readyassist-in/WireFrames">wireframe</a>

# Status Code

<table>
  <tr>
    <td>S.No</td>
    <td>Reason</td>
    <td>Status Code</td>
  </tr>
  <tr>
    <td>1.</td>
    <td>All Okay</td>
    <td>200</td>
  </tr>
  <tr>
    <td>2.</td>
    <td>Created</td>
    <td>201</td>
  </tr>
  <tr>
    <td>3.</td>
    <td>No Content</td>
    <td>204</td>
  </tr>
  <tr>
    <td>4.</td>
    <td>Not Modified</td>
    <td>304</td>
  </tr>
  <tr>
    <td>5.</td>
    <td>Bad Request</td>
    <td>400</td>
  </tr>
  <tr>
    <td>6.</td>
    <td>Unauthorized Access</td>
    <td>401</td>
  </tr>
  <tr>
    <td>7.</td>
    <td>Forbidden</td>
    <td>403</td>
  </tr>
  <tr>
    <td>8.</td>
    <td>Content Not Found</td>
    <td>404</td>
  </tr>
  <tr>
    <td>9.</td>
    <td>Internal Server Error</td>
    <td>500</td>
  </tr>
</table>

  # Prerequisite
  So what are the basic requirements before using these API's are given below:
  <br />
  <ol>
    <li>You have the Environment in your laptope of any Scripting Language like Node JS (mostly preffered), 
    Python(can go with flask and Django),
    .Net and many more.</li>
    <li>You have to install any database here whether it is an SQL(MongoDB), No SQL(mySql, Orcale Server) or GraphQL.</li>
    <li>Database can also be hosted on the Online Platforms also like GCP, AWS, Microsoft Azure, M-Lab, MongoDB Atlas.</li>
    <li>Now to test the API's there is a need of the API development environment, and flexibly integrates with the software development cycle like Postman.</li>
  </ol>
  <ol>
  <li><a href="http://nodejs.org/">For Node Js Click me</a></li>
  <li><a href="https://docs.mongodb.com">For MongoDB Click me</a></li>
  <li><a href="http://flask.pocoo.org/docs/0.12/quickstart/">For Python Flask</a></li>
  <li><a href="https://console.cloud.google.com/">For GCP Click me</a></li>
  <li><a href="https://heroku.com">For Heroku Cick Me</a></li>
  <li><a href="https://www.getpostman.com/downloads/">For Postman Click me(For API Environmnet)</a></li>
  </ol>
  
  # Routes For API
  So for now we are in designing phase So we consider our base URL for the API's as 
  ```
  https://localhost:3000/
  ```
  
  and It will be cover with the Role based Access control with the help of express js and we also shown below in the Authentication

## Authentication  
I used express-session to manage sessions to authenticate. We have isUserLoggedIn, isUserLoggedOut middleware function which checks if the user is authenticated or not. The session token is stored in the database using connect-mongo package and is deleted when the user logout
  
  ```
  async function isUserLoggedIn (req, res, next) {
  try {
    if (!(req.session && req.session.user)) {
      return res.status(401).send({
        error: "Unauthorized Access!"
      });
    }else {
      const user = await User.findOne({ _id : req.session.user._id })
      if(user) {
        next();
      } else {
        req.session.user = null;
        return res.status(401).send({
          error: "Unauthorized Access!"
        });
      }
    }
  } catch(e) {
    res.status(400).send({
      error: e
    })
  }
}


// Function to check whether the user is logged out
function isUserLoggedOut (req, res, next) {
  if (req.session && req.session.user) {
    return res.status(200).send({
      message: "User already Logged In!"
    });
  }
  next();
}

module.exports = {
  isUserLoggedIn,
  isUserLoggedOut
}
  ```
  
  # Technician Routes
  
  <table>
  <tr>
     <th>S.No.</th>
     <th>Route</th>
     <th>Method</th>
     <th>Parameters</th>
     <th>Description</th>
  </tr>
  <tr>
    <td>1.</td>
    <td>/mech/login</td>
    <td>POST</td>
    <td>
      <ul>
         <li>ID</li>
         <li>Password</li>
         <li>3 Images</li>
      </ul>
    </td>
    <td>For Login into the System</td>
  </tr>
  
  <tr>
    <td>2.</td>
    <td>/customer/:id</td>
    <td>GET</td>
    <td>
      <ul>
         <li>Name</li>
         <li>Location</li>
         <li>Contact Number (Scrap Number)</li>
      </ul>
    </td>
    <td>Getting all the details of customers</td>
  </tr>
  
  <tr>
    <td>3.</td>
    <td>/mech/:id</td>
    <td>GET</td>
    <td>
      <ul>
         <li>ID</li>
         <li>Password</li>
         <li>Account Details</li>
         <li>Photo_of_the Mechanic</li>
      </ul>
    </td>
    <td>All the details So can see his dashboard</td>
  </tr>
  
  <tr>
    <td>4.</td>
    <td>/customer/:id</td>
    <td>PUT</td>
    <td>
      <ul>
         <li>Customer ID</li>
         <li>Password</li>
         <li>Work_Completed</li>
        <li>Purchasing</li>
        <li>Purchasing_Part_Name(array)*</li>
        <li>Purchasinf_Cost(array)*</li>
      </ul>
    </td>
    <td>For updating the customers Schema's after finishing the Work.</td>
  </tr>
  </table>
  *<i>this is not mandatory parameters to pass into the API's</i>
  
  # Finance Routes
 <table>
  <tr>
     <th>S.No.</th>
     <th>Route</th>
     <th>Method</th>
     <th>Parameters</th>
     <th>Description</th>
  </tr>
  
  <tr>
    <td>1.</td>
    <td>/client/register</td>
    <td>POST</td>
    <td>
      <ul>
         <li>Client ID</li>
         <li>Password</li>
         <li>Work With them</li>
        <li>Messages(array)*</li>
        <li>Dates_of_meeting(array)*</li>
        <li>Notes(Object)*</li>
      </ul>
    </td>
    <td>Creating a new Client.</td>
  </tr>
  
  
  <tr>
    <td>2.</td>
    <td>/client/:id</td>
    <td> PUT/GET</td>
    <td>
      <ul>
         <li>Client ID</li>
         <li>Password</li>
         <li>Work With them</li>
        <li>Messages(array)*</li>
        <li>Dates_of_meeting(array)*</li>
        <li>Notes(Object)*</li>
      </ul>
    </td>
    <td>Fixing the meeting and chat also.Apart from this Finance can also Set notes to a particular Client.</td>
  </tr>

  <tr>
    <td>3.</td>
    <td>/mech/:id</td>
    <td> PUT/GET</td>
    <td>
      <ul>
         <li>ID</li>
         <li>Password</li>
         <li>Account Details</li>
         <li>Photo_of_the Mechanic</li>
      </ul>
    </td>
    <td>So that finance team can update the Accounts of the Technician.</td>
  </tr>
  
  <tr>
    <td>4.</td>
    <td>/dataAnyaltics</td>
    <td>GET</td>
    <td>
      <ul>
        <li>Data[in Array or json]</li>
      </ul>
    </td>
    <td>This will directly come from the database so that any FrontEnd Framework like React Js and Angular JS can be used to make the Graphs</td>
  </tr>

  <tr>
    <td>5.</td>
    <td>/client/:id</td>
    <td>PATCH</td>
    <td>
      <ul>
        <li>Different Link which is shown in the wireframe</li>
      </ul>
    </td>
    <td>For getting more details and set additional features to the Client.</td>
  </tr>


</table>

# HR Routes
<table>
  <tr>
    <th>S.No.</th>
     <th>Route</th>
     <th>Method</th>
     <th>Parameters</th>
     <th>Description</th>
  </tr>
  
  
  <tr>
    <td>1.</td>
     <td>/mech/:id</td>
     <td>GET</td>
     <td>
       <ul>
         <li>Name</li>
         <li>technician Status</li>
       </ul>
    </td>
     <td>To check the Attendance of techanician</td>
  </tr>
  
  <tr>
    <td>2.</td>
     <td>/emp/:id</td>
     <td>GET</td>
     <td>
       <ul>
         <li>Name</li>
         <li>Employee Status</li>
       </ul>
    </td>
     <td>To check the Attendance of Employees and also the othr features from this only(ex:birthday).</td>
  </tr>
  
  <tr>
    <td>3.</td>
     <td>/hr/message/:id</td>
     <td>POST</td>
     <td>
       <ul>
         <li>Message content</li>
         <li>To whom check through Id in the database</li>
       </ul>
    </td>
     <td>Messaging feature between different departments.</td>
  </tr>
  
  <tr>
    <td>4.</td>
     <td>/hr/:id</td>
     <td>GET</td>
     <td>
       <ul>
         <li>query</li>
         <li>date-time</li>
         <li>status(solved or not)</li>
       </ul>
    </td>
     <td>getting diffeent query and solved them.</td>
  </tr>
</table>

  *<i>this is not mandatory parameters to pass into the API's</i>
  
  # Fleet Routes
  
<table>
  <tr>
    <th>S.No.</th>
     <th>Route</th>
     <th>Method</th>
     <th>Parameters</th>
     <th>Description</th>
  </tr>
  
  <tr>
    <td>1.</td>
     <td>/mech/:id</td>
     <td>GET</td>
     <td>
       <ul>
         <li>ID</li>
         <li>Password</li>
         <li>Account Details</li>
         <li>Photo_of_the Mechanic</li>
         <li>Status of the Mechanic</li>
       </ul>
    </td>
     <td>Getting the status of the Technician.</td>
  </tr>
  
  <tr>
    <td>2.</td>
     <td>/fleet/:hotspot</td>
     <td>GET</td>
     <td>
       <ul>
         <li>Hostspot</li>
         <li>No_of_technician_active</li>
         <li>customer_active</li>
         <li>message(array)*</li>
       </ul>
    </td>
     <td>Getting all the maps details from the API.</td>
  </tr>
  
  
  <tr>
    <td>3.</td>
     <td>/fleet/message/:id</td>
     <td>POST/PUT</td>
     <td>
       <ul>
         <li>Message content</li>
         <li>To whom check through Id in the database</li>
       </ul>
    </td>
     <td>Messaging feature between different departments and getting hostory also.</td>
  </tr>
  
  
  
  
  
</table>
  
  
  # Deployment
This api can be hosted on platform like heroku, aws, and others. MongoDB Atlas or Matlab can be used for remote database.
For instance, the application can be deployed on Heroku by creating and registering an account. Following, create a new app and choose a deployment method (terminal or github) and follow the instruction there. Remote database can be created using Mongodb Atlas or Matlab.
For Mongodb Atlas, you need to just to create your account and make a new cluster and link the cluster to your application through a URL. Following the given steps, you would have a remote application up and running.
  
