// export default function Profile() {
//   return (
//     <div>
//       <div>
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
//           alt="User avatar"
//         />
//         <p>Petra Marica</p>
//         <p>@pmarica</p>
//         <p>Salvador, Brasil</p>
//       </div>
//       <ul>
//         <li>
//           <span>Followers</span>
//           <span>1000</span>
//         </li>
//         <li>
//           <span>Views</span>
//           <span>2000</span>
//         </li>
//         <li>
//           <span>Likes</span>
//           <span>3000</span>
//         </li>
//       </ul>
//     </div>
//   );
// }

// import React from "react";

import "./Profile.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="profile">
      <div>
        <img className="profile-img" src={image} alt="User avatar" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className="profile-list">
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
