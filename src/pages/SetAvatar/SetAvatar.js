import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading';

const SetAvatar = () => {
    const naviate = useNavigate();
    const api = "https://api.multiavatar.com/45678945";
    const [avatars, setAvatars] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedAvatar, setSelectedAvatar] = useState(undefined);
    if(isLoading){
        return <Loading />
    }
    return (
        <div>
            
        </div>
    );
};

export default SetAvatar;