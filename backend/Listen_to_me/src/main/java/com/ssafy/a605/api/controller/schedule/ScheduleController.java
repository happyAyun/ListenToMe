package com.ssafy.a605.api.controller.schedule;

import com.ssafy.a605.api.controller.Counselor.CounselorController;
import com.ssafy.a605.model.dto.ScheduleDto;
import com.ssafy.a605.model.entity.Schedule;
import com.ssafy.a605.service.CounselorService;
import com.ssafy.a605.service.JwtServiceImpl;
import com.ssafy.a605.service.ScheduleService;
import io.swagger.annotations.ApiParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/schedule-api")
public class ScheduleController {

    public static final Logger logger= LoggerFactory.getLogger(CounselorController.class);
    private static final String SUCCESS= "success";
    private static final String FAIL= "fail";

    @Autowired
    private JwtServiceImpl jwtService;

    @Autowired
    private ScheduleService scheduleService;

    @Autowired
    private CounselorService userService;

    //상담자 -> 자신의 상담 내역 불러오기
    @GetMapping("/counselor")
    public ResponseEntity<Page<ScheduleDto>> getCounselorSchedule(@PageableDefault(size = 10, sort = "dateTime") Pageable pageRequest, HttpServletRequest request) throws Exception {
        HttpStatus status = HttpStatus.ACCEPTED;
        if (jwtService.isUsable(request.getHeader("access-token"))) {
            return new ResponseEntity<Page<ScheduleDto>>(scheduleService.getCounselorSchedule(jwtService.getUserId(), pageRequest), HttpStatus.OK);
        } else {
            logger.error("사용 불가능 토큰!!!");
            status = HttpStatus.ACCEPTED;
        }
        return new ResponseEntity<Page<ScheduleDto>>(HttpStatus.BAD_REQUEST);
    }

    //1. 상담자 -> 되는 상담 시간 지정
    @PostMapping("/time")
    public ResponseEntity<String> setScheduleTime(@RequestBody ScheduleDto scheduleDto, HttpServletRequest request) throws Exception {
        if(scheduleService.checkScheduleTime(scheduleDto.getDateTime())) return new ResponseEntity<String>("already exists", HttpStatus.OK);
        scheduleDto.setCounselor(userService.getCounselorInfo(jwtService.getUserId()));
        System.out.println(scheduleDto.toString());
        if(scheduleService.setScheduleTime(scheduleDto)){
            return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
        }
        return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
    }
}