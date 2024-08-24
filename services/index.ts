import axios from "axios";

const apiUrl = 'https://cnze3hs396.execute-api.us-east-1.amazonaws.com/dev';

export const sendMessage = async (prompt: string, sessionId: string) => {
    try {
        const response = await axios.post(apiUrl, {
            "session_id": sessionId,
            "user_input": prompt,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: false // Esto puede ser importante si estás trabajando con CORS y cookies
        });
        
        const res = response.data
        return res;
    } catch (error) {
        console.error('Error posting data:', error);
    }
}
