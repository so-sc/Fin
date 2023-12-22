import 'package:shared_preferences/shared_preferences.dart';

class SessionManager {
  static const String _tokenKey = 'session_token';

  static Future<void> saveToken(String token) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_tokenKey, token);
    // Save the current timestamp as the token creation time
    await prefs.setInt('token_timestamp', DateTime.now().millisecondsSinceEpoch);
  }

  static Future<String?> getToken() async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString(_tokenKey);
    return token;
  }

  static Future<void> deleteToken() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(_tokenKey);
    await prefs.remove('token_timestamp');
  }

  static Future<bool> isTokenExpired() async {
    final prefs = await SharedPreferences.getInstance();
    final tokenTimestamp = prefs.getInt('token_timestamp');
    if (tokenTimestamp != null) {
      final currentTime = DateTime.now().millisecondsSinceEpoch;
      final difference = currentTime - tokenTimestamp;
      // Check if 24 hours (86400000 milliseconds) have passed
      return difference >= 86400000;
    }
    // If token timestamp doesn't exist, consider it expired
    return true;
  }

  static Future<void> handleTokenExpiration() async {
    final isExpired = await isTokenExpired();
    if (isExpired) {
      await deleteToken();
      // Perform actions like logging out or refreshing the token
    }
  }
}
