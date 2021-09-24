import { Route, Redirect } from "react-router-dom";
import React from "react";

export const PrivateRoute = ({ isAuthenticated, Component, ...rest }) => {
  console.log(isAuthenticated, "logueado?");
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
// export const PrivateRoute = ({ children, isAuthenticated, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         isAuthenticated ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               // state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   );
// };
