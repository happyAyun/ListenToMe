package com.ssafy.a605.service;

import com.ssafy.a605.model.dto.ClientDto;
import com.ssafy.a605.model.dto.CounselorDto;
import com.ssafy.a605.model.dto.UserDto;

import java.util.Map;

public interface ClientService {
    public Map<String,String> login(Map<String,String> map) throws Exception;

    public UserDto userInfo(String userid) throws Exception;

    public ClientDto clientInfo(String userEmail) throws Exception;

    public CounselorDto counselorInfo(String userEmail) throws Exception;

    public boolean joinClient(ClientDto clientDto) throws Exception;

    public boolean updateClient(ClientDto clientDto) throws Exception;


    public boolean checkId(String userid) throws Exception;

    boolean deleteClient(String userEmail) throws Exception;
}
