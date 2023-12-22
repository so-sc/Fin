import 'package:flutter/material.dart';
import 'package:async/async.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'models.dart';

String baseUrl = "";

Future<OnBoardingUsers> fetchPost() async {
  final uri = Uri.parse("");
  final response = await http.get(uri);
  if (response.statusCode == 200) {
    return OnBoardingUsers.fromJson(json.decode(response.body));
  } else {
    throw Exception('Failed to load api.');
  }
}

Future<OnBoardingUsers> createPost(Map<String, dynamic> request) async {
  final uri = Uri.parse("");
  final response = await http.post(
    uri,
    body: request,
  );
  if (response.statusCode == 200) {
    return OnBoardingUsers.fromJson(json.decode(response.body));
  } else {
    throw Exception('Failed to load api.');
  }
}

Future<dynamic> fetchData(String token, Map<String, dynamic> request) async {
  final uri = Uri.parse("");
  final response = await http.post(
    uri,
    body: request,
    headers: <String, String>{
      'Authorization': 'Bearer $token',
      'Content-Type': 'application/json',
    },
  );
  if (response.statusCode == 200) {
    return OnBoardingUsers.fromJson(json.decode(response.body));
  } else {
    throw Exception('Failed to load api.');
  }
}