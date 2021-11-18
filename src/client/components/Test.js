import React, { Suspense } from "react";
// import { fetchData } from "./TestUtils.js";

// const resource = fetchData();

export default () => {
  return (
    <div>
      {/* <Suspense fallback={<h1>Loading User...</h1>}>
        <ProfileDetails />
      </Suspense>

      <Suspense fallback={<h1>Loading Posts...</h1>}>
        <ProfilePosts />
      </Suspense> */}
    </div>
  );
};

// const ProfileDetails = () => {
//   const user = resource.user.read();
//   return (
//     <div>
//       <h1>{user.username}</h1>
//       <ul>
//         {/* <li>Username: {user.username}</li>
//         <li>Email: {user.email}</li>
//         <li>City: {user.address.city}</li> */}
//       </ul>
//     </div>
//   );
// };

// const ProfilePosts = () => {
//   // const posts = resource.posts.read();
//   return (
//     <ul>
//       <li>
//         <strong>Latest Posts</strong>
//       </li>
//       {posts.map((post) => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   );
// };
