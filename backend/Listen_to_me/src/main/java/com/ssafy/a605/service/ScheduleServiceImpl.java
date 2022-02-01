package com.ssafy.a605.service;

import com.ssafy.a605.model.dto.ScheduleDto;
import com.ssafy.a605.model.entity.Client;
import com.ssafy.a605.model.entity.Counselor;
import com.ssafy.a605.model.entity.Schedule;
import com.ssafy.a605.repository.ClientRepository;
import com.ssafy.a605.repository.CounselorRepository;
import com.ssafy.a605.repository.ScheduleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.DayOfWeek;
import java.time.LocalDateTime;
import java.time.temporal.TemporalAdjusters;
import java.util.List;

@RequiredArgsConstructor
@Service
public class ScheduleServiceImpl implements ScheduleService {
    final private CounselorRepository counselorRepository;
    final private ScheduleRepository scheduleRepository;
    final private ClientRepository clientRepository;

    @Override
    @Transactional
    public boolean setScheduleTime(ScheduleDto scheduleDto) throws Exception {
        Schedule schedule = new Schedule();
        schedule.setTime(scheduleDto);
        Schedule ret = scheduleRepository.save(schedule);
        return ret.equals(schedule);
    }

    @Override
    public boolean checkScheduleTime(LocalDateTime dateTime) throws Exception {
        return scheduleRepository.existsScheduleByDateTimeEquals(dateTime);
    }

    @Override
    public List<ScheduleDto> getCounselorSchedule(String userEmail) throws Exception {
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime start = now.with(TemporalAdjusters.previousOrSame(DayOfWeek.SUNDAY)).withHour(0);
        LocalDateTime end = now.with(TemporalAdjusters.nextOrSame(DayOfWeek.SATURDAY)).withHour(23);
        System.out.println(start + " " + end);
        List<ScheduleDto> schedule = scheduleRepository.findAllByCounselor_EmailAndDateTimeBetween(userEmail, start, end);
        return schedule;
    }

    @Override
    public boolean requestCounseling(String userEmail, int scheduleId) throws Exception {
        Client client = clientRepository.findByEmail(userEmail).orElseThrow(
                ()->  new NullPointerException("회원정보가 존재 하지 않습니다")
        );
        Schedule schedule = scheduleRepository.findById(scheduleId);
        if(schedule.getState()==0){
            schedule.setClient(client);
            schedule.setState(1);
        }
        Schedule ret = scheduleRepository.save(schedule);
        return ret.equals(schedule);
    }

    @Override
    public Page<ScheduleDto> getCounselorApprovedSchedule(String userEmail, Pageable pageRequest) throws Exception {
        Counselor counselor = counselorRepository.findByEmail(userEmail).orElseThrow(
                ()->  new NullPointerException("회원정보가 존재 하지 않습니다")
        );
        int []states = {2,3};
        Page<ScheduleDto> schedule = scheduleRepository.findAllByCounselor_EmailAndStateEquals(userEmail, 2, pageRequest);
        Page<ScheduleDto> pagingList = schedule.map(
                post -> new ScheduleDto(post.getId(), post.getClient(), post.getCounselor(), post.getDateTime(), post.getTopic(), post.getPoint(), post.getState()
                ));
        return pagingList;
    }
    @Override
    public Page<ScheduleDto> getCounselorEndedSchedule(String userEmail, Pageable pageRequest) throws Exception {
        Counselor counselor = counselorRepository.findByEmail(userEmail).orElseThrow(
                ()->  new NullPointerException("회원정보가 존재 하지 않습니다")
        );
        Page<ScheduleDto> schedule = scheduleRepository.findAllByCounselor_EmailAndStateEquals(userEmail, 3, pageRequest);
        Page<ScheduleDto> pagingList = schedule.map(
                post -> new ScheduleDto(post.getId(), post.getClient(), post.getCounselor(), post.getDateTime(), post.getTopic(), post.getPoint(), post.getState()
                ));
        return pagingList;
    }

    @Override
    public Page<ScheduleDto> getClientApprovedSchedule(String userEmail, Pageable pageRequest) throws Exception {
        Page<ScheduleDto> schedule = scheduleRepository.findAllByClient_EmailAndStateEquals(userEmail, 2, pageRequest);
        Page<ScheduleDto> pagingList = schedule.map(
                post -> new ScheduleDto(post.getId(), post.getClient(), post.getCounselor(), post.getDateTime(), post.getTopic(), post.getPoint(), post.getState()
                ));
        return pagingList;
    }

    @Override
    public Page<ScheduleDto> getClientEndedSchedule(String userEmail, Pageable pageRequest) throws Exception {
        Page<ScheduleDto> schedule = scheduleRepository.findAllByClient_EmailAndStateEquals(userEmail, 3, pageRequest);
        Page<ScheduleDto> pagingList = schedule.map(
                post -> new ScheduleDto(post.getId(), post.getClient(), post.getCounselor(), post.getDateTime(), post.getTopic(), post.getPoint(), post.getState()
                ));
        return pagingList;
    }
}
