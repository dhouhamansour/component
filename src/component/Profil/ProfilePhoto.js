import React from 'react'
import profil from "./profil.jpg"

function ProfilePhoto() {
    return (
        <div className="photo">
            <img src={profil} alt="profil" />
        </div>
    )
}

export default ProfilePhoto
