import { useState } from 'react';

export const userTracker = (initialUser = '', initialPassword = '') => {
    const [username, setUsername] = useState(initialUser);
    const [password, setPassword] = useState(initialPassword);

    function trackData(evt) {
        const type = evt.target.name;
        const value = evt.target.value;
        type === 'username' ? setUsername(value) : setPassword(value)
    }

    return {
        username: username,
        password: password,
        onTrackData: trackData
    }
}

