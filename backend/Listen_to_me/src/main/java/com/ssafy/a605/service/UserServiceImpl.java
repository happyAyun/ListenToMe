package com.ssafy.a605.service;

import com.ssafy.a605.model.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{

    @Override
    public UserDto login(UserDto userDto) throws Exception {
//        System.out.println(userDto.getEmail() + " " + userDto.getPassword());
        if (userDto.getEmail() == null || userDto.getPassword() == null)
            return null;
        return userDto;
    }

    @Override
    public UserDto userInfo(String userid) throws Exception {
        return null;
    }

    @Override
    public boolean joinUser(UserDto userDto) throws Exception {
        return true;
    }

    @Override
    public boolean checkId(String userid) throws Exception {
        return true;
    }
}
