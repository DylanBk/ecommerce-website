import axios from "axios";

export const check_session = async () => {
    try {
        const response = await axios.get('/session-status');
        return response.data.sessionExists;
    } catch (error) {
        console.error(`Error Checking Session Status: ${error.message}`);
        return false;
    };
};