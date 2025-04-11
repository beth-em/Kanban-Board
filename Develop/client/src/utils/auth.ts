import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token to get user info
    const token = this.getToken();
    if (!token) return null;

    // Decode the token and return the payload ( e.g. { username: "testuser" })
    return jwtDecode<JwtPayload>(token);
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const token = this.getToken();
    // Return true ONLY if token exists and is not expired
    return !!token && !this.isTokenExpired(token);
  }
  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    try {
      const decoded = jwtDecode<JwtPayload & { exp: number }>(token);

      // convert 'exp' to milliseconds since by default it is in seconds.
      if (decoded.exp) {
        return decoded.exp * 1000 < Date.now();
      }
      
      // If there is no expiration in the token, consider it invalid
      return true;
    } catch (err) {
      console.error('Error decoding token', err);
      return true;
    }
  }

  getToken(): string {
    // TODO: return the token from localStorage
    return localStorage.getItem('id_token') || '';
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    // TODO: redirect to the home page
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    // TODO: remove the token from localStorage
    // TODO: redirect to the login page
    localStorage.removeItem('id_token');
    window.location.assign('/login');
  }
}

export default new AuthService();
