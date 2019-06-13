# APIs

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



  *<i>this is not mandatory parameters to pass into the API's</i>
