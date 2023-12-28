import { jwtDecode } from 'jwt-decode';

const TOKEN_KEY = 'token';

interface AuthServiceDef {
    login: (username: string, password: string) => Promise<string>;
    logout: () => void;
    getToken: () => string | null;
    isTokenExpired: () => boolean;
}

const AuthService: AuthServiceDef = {
    login: async (username: string, password: string) => {
        if (username === 'user' && password === '123456') {
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
            localStorage.setItem(TOKEN_KEY, token);
            return token;
        } else {
            throw new Error('Invalid credentials');
        }
    },

    logout: () => {
        localStorage.removeItem(TOKEN_KEY);
    },

    getToken: () => {
        return localStorage.getItem(TOKEN_KEY);
    },

    isTokenExpired: () => {
        const token = localStorage.getItem(TOKEN_KEY);
        if (token) {
            const decoded: { exp: number } = jwtDecode(token);
            const currentTime = Date.now() / 1000;
            return decoded.exp < currentTime;
        }
        return true;
    },
};

export default AuthService;
