package com.ssafy.a605.model;

public class CounselorDto extends UserDto{
    private String phoneNumber;
    private String photo;
    private String greeting;
    private String degree;

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getPhoto() {
        return photo;
    }

    public String getGreeting() {
        return greeting;
    }

    public String getDegree() {
        return degree;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public void setGreeting(String greeting) {
        this.greeting = greeting;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    public CounselorDto(String email, String password, String name, String nickname, char gender, String birth, int point, String phoneNumber, String photo, String greeting, String degree) {
        super(email, password, name, nickname, gender, birth, point);
        this.phoneNumber = phoneNumber;
        this.photo = photo;
        this.greeting = greeting;
        this.degree = degree;
    }
}
