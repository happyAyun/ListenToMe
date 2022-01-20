package com.ssafy.a605.service;

import com.ssafy.a605.model.UserDto;

public interface UserService {
    public UserDto login(UserDto userDto) throws Exception;

    public UserDto userInfo(String userid) throws Exception;

    public boolean joinUser(UserDto userDto) throws Exception;

    public boolean checkId(String userid) throws Exception;

//    public boolean updateUser(UserDto userDto) throws Exception;
//
//    public boolean deleteUser(String userid) throws Exception;
}
