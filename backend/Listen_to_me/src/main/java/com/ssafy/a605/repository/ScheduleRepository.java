package com.ssafy.a605.repository;

import com.ssafy.a605.model.dto.ScheduleDto;
import com.ssafy.a605.model.entity.Schedule;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface ScheduleRepository extends JpaRepository<Schedule, Long> {
    Page<ScheduleDto> findAllByCounselor_EmailAndStateIn(String userEmail, int[] states, Pageable pageRequest);
    boolean existsScheduleByDateTimeEquals(LocalDateTime dateTime);
    List<ScheduleDto> findAllByCounselor_EmailAndDateTimeBetween(String userEmail, LocalDateTime start, LocalDateTime end);
    Schedule findById(int id);
}
