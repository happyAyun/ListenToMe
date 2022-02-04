package com.ssafy.a605.service;


import com.ssafy.a605.model.dto.CertificateDto;
import com.ssafy.a605.model.dto.ClientDto;
import com.ssafy.a605.model.dto.CounselorDto;
import com.ssafy.a605.model.dto.UserDto;
import com.ssafy.a605.model.entity.Client;
import com.ssafy.a605.model.entity.Counselor;
import com.ssafy.a605.model.entity.User;
import com.ssafy.a605.repository.CareerRepository;
import com.ssafy.a605.repository.CertificateRepository;
import com.ssafy.a605.repository.CounselorRepository;
import com.ssafy.a605.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class CounselorServiceImpl implements CounselorService {

    final private CounselorRepository counselorRepository;
    final private CareerRepository CareerRepository;
    final private CertificateRepository certificateRepository;
    final private UserRepository userRepository;

    @Override
    public Map<String,String> login(Map<String,String> map) throws Exception {
        User user = counselorRepository.findByEmail(map.get("email")).orElseThrow(
                ()->  new NullPointerException("회원정보가 존재 하지 않습니다")
        );;
        if (!map.get("password").equals(user.getPassword()))
            return null;

        return map;
    }


    @Override
    public CounselorDto counselorInfo(String userEmail) throws Exception {

        Counselor counselor = counselorRepository.findByEmail(userEmail).orElseThrow(
                ()->  new NullPointerException("회원정보가 존재 하지 않습니다")
        );

        CounselorDto counselorDto = new CounselorDto(
                counselor.getEmail(), counselor.getPassword(), counselor.getName(), counselor.getGender(), counselor.getBirth(),counselor.getPoint(),counselor.getPhoneNumber(),counselor.getPhoto(), counselor.getShortGreeting(), counselor.getGreeting(), counselor.getDegree()
        );
        return counselorDto;

    }

    @Override
    public Counselor getCounselorInfo(String userEmail) throws Exception {
        Counselor counselor = counselorRepository.findByEmail(userEmail).orElseThrow(
                ()->  new NullPointerException("회원정보가 존재 하지 않습니다")
        );
        return counselor;
    }

    @Override
    @Transactional
    public boolean joinCounselor(CounselorDto counselorDto) throws Exception {

        Counselor counselor = new Counselor();
        counselor.update(counselorDto);
        Counselor ret = userRepository.save(counselor);
        return ret.equals(counselor);
    }

    @Override
    @Transactional
    public boolean updateCounselor(CounselorDto counselorDto) throws Exception {
        String userEmail = counselorDto.getEmail();
        Counselor client = counselorRepository.findByEmail(userEmail).orElseThrow(
                ()->  new NullPointerException("회원정보가 존재 하지 않습니다")
        );
        client.update(counselorDto);
        return true;
    }

    @Override
    public boolean updateShortGreeting(String shortGreeting, String userEmail) throws Exception {
        Counselor counselor = counselorRepository.findByEmail(userEmail).orElseThrow(
                ()->  new NullPointerException("회원정보가 존재 하지 않습니다")
        );
        counselor.setShortGreeting(shortGreeting);
        Counselor c = counselorRepository.save(counselor);
        return c.equals(counselor);
    }

    @Override
    public boolean updateGreeting(String greeting, String userEmail) throws Exception {
        Counselor counselor = counselorRepository.findByEmail(userEmail).orElseThrow(
                ()->  new NullPointerException("회원정보가 존재 하지 않습니다")
        );
        counselor.setGreeting(greeting);
        Counselor c = counselorRepository.save(counselor);
        return c.equals(counselor);
    }

    @Override
    public boolean checkId(String userEmail) throws Exception {

        System.out.println(userEmail);
        Optional<User> user = userRepository.findByEmail(userEmail);

        if(user.isPresent()){
            return true;
        }
        return false;
    }

    @Override
    @Transactional
    public boolean deleteCounselor(String userEmail) throws Exception {
        userRepository.deleteByEmail(
                userRepository.findByEmail(userEmail).orElseThrow(
                        () -> new NullPointerException("회원정보가 존재 하지 않습니다")
                ).getEmail()
        );

        return true;
    }

    @Override
    public List<CertificateDto> getCertificates(String userEmail) throws Exception {
        return null;
    }
}
