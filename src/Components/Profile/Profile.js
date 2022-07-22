import React from 'react';

const Profile = () => {
    return (
      <>
    
        <div className="flex my-3">
          <div class="avatar p-2">
            <div class="w-14 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="p-2 text-left">
            <h1 className="font-bold ">Ankit Kumar Jha</h1>
            <p>Admin</p>
          </div>
        </div>
      </>
    );
};

export default Profile;