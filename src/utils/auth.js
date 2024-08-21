export const isAuthenticated = () => {
    return !!localStorage.getItem('access_token');
};

export const getAuthToken = () => {
    return localStorage.getItem('access_token');
};

export const logout = () => {
    localStorage.removeItem('access_token');
};
