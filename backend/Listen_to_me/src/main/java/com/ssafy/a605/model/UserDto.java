package com.ssafy.a605.model;


public class UserDto {
    private String email;
    private String password;
    private String name;
    private String nickname;
    private char gender;
    private String birth;
    private int point;

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getName() {
        return name;
    }

    public String getNickname() {
        return nickname;
    }

    public char getGender() {
        return gender;
    }

    public String getBirth() {
        return birth;
    }

    public int getPoint() {
        return point;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public void setGender(char gender) {
        this.gender = gender;
    }

    public void setBirth(String birth) {
        this.birth = birth;
    }

    public void setPoint(int point) {
        this.point = point;
    }

    public UserDto(String email, String password, String name, String nickname, char gender, String birth, int point) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.nickname = nickname;
        this.gender = gender;
        this.birth = birth;
        this.point = point;
    }
}
