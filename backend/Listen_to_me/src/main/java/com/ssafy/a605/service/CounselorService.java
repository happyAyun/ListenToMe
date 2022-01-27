package com.ssafy.a605.service;

import com.ssafy.a605.model.dto.CertificateDto;
import com.ssafy.a605.model.dto.ClientDto;
import com.ssafy.a605.model.dto.CounselorDto;
import com.ssafy.a605.model.dto.UserDto;

import java.util.List;
import java.util.Map;

public interface CounselorService {

    public Map<String,String> login(Map<String,String> map) throws Exception;

    public CounselorDto counselorInfo(String userEmail) throws Exception;

    public boolean joinCounselor(CounselorDto counselorDto) throws Exception;

    public boolean updateCounselor(CounselorDto counselorDto) throws Exception;

    public boolean checkId(String userid) throws Exception;

    boolean deleteCounselor(String userEmail) throws Exception;

    List<CertificateDto> getCertificates (String userEmail) throws Exception;

}
